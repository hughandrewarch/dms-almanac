package almanac.jdbc.adapters

import almanac.exceptions.PersonNotFoundException
import almanac.jdbc.util.preparedStatementCreator
import almanac.models.Person
import almanac.models.PersonRelation
import almanac.models.PersonRelationType
import almanac.ports.persistence.PersonRepository
import org.springframework.dao.EmptyResultDataAccessException
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.jdbc.support.GeneratedKeyHolder
import org.springframework.jdbc.support.KeyHolder

class JdbcPersonRepository(private val jdbcTemplate: JdbcTemplate) : PersonRepository {

    //TODO make db
    private var relations: MutableList<PersonRelation> = mutableListOf()

    override fun find(id: Long): Person {
        try {
            return jdbcTemplate.queryForObject(
                    """select id, name, race, description from person where id = ?""",
                    mapper,
                    id
            )!!
            //TODO maybe move try catch up?
        } catch (e: EmptyResultDataAccessException) {
            throw PersonNotFoundException(id)
        }
    }

    override fun findAll(): List<Person> {
        return jdbcTemplate.query(
                """select id, name, race, description from person""",
                mapper
        )
    }

    //TODO separate a bit mebe, i don't know what this means... probably, query, mapper, ps, keyholder etc.
    override fun create(name: String, race: String, description: String): Person {
        val keyHolder: KeyHolder = GeneratedKeyHolder()

        jdbcTemplate.update(preparedStatementCreator("""
                insert into person (name, race, description)
                values 
                (?, ?, ?)
            """
        ) { ps ->
            ps.setString(1, name)
            ps.setString(2, race)
            ps.setString(3, description)
        }, keyHolder)

        val id = keyHolder.key!!.toLong()

        return Person(id, name, race, description)
    }

    override fun createRelation(id: Long, relation: PersonRelationType, relationId: Long) {
        relations.add(PersonRelation(id, relation, relationId))
    }

    //TODO query with relation
    override fun findAll(relation: PersonRelationType, relatedId: Long): List<Person> {

        val people = findAll()

        val personIds = relations
                .filter {
                    it.relation == relation && it.relationId == relatedId
                }.map { it.id }

        return people.filter { personIds.contains(it.id) }
    }

    override fun clear() {
        jdbcTemplate.update("""delete from person""")
    }
}

private val mapper = RowMapper { rs, _ ->
    Person(
            id = rs.getLong("id"),
            name = rs.getString("name"),
            race = rs.getString("race"),
            description = rs.getString("description")
    )
}