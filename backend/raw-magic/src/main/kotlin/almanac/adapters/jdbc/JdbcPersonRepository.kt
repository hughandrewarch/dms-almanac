package almanac.adapters.jdbc

import almanac.exceptions.PersonNotFoundException
import almanac.adapters.jdbc.util.preparedStatementCreator
import almanac.models.Person
import almanac.models.PersonRelationType
import almanac.ports.persistence.PersonRepository
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.jdbc.support.GeneratedKeyHolder
import org.springframework.jdbc.support.KeyHolder

class JdbcPersonRepository(private val jdbcTemplate: JdbcTemplate) : PersonRepository {

    override fun find(id: Long): Person {
        return jdbcTemplate.query(
                """select id, name, race, description from person where id = ?""",
                mapper,
                id
        ).singleOrNull() ?: throw PersonNotFoundException(id)
    }

    override fun findAll(): List<Person> {
        return jdbcTemplate.query(
                """select id, name, race, description from person""",
                mapper
        )
    }

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

        return find(id)
    }

    override fun createRelation(personId: Long, relation: PersonRelationType, relationId: Long) {

        jdbcTemplate.update(preparedStatementCreator("""
                insert into person_relation (person_id, relation, relation_id)
                values 
                (?, ?, ?)
            """
        ) { ps ->
            ps.setLong(1, personId)
            ps.setString(2, relation.toString())
            ps.setLong(3, relationId)
        })
    }

    override fun findAll(relation: PersonRelationType, relatedId: Long): List<Person> {

        return jdbcTemplate.query(preparedStatementCreator("""
                select p.id, name, race, description
                from person p, person_relation pr
                where p.id = pr.person_id 
                and pr.relation = ? 
                and pr.relation_id = ?
                """.trimMargin()
        ) { ps ->
            ps.setString(1, relation.toString())
            ps.setLong(2, relatedId)
        }, mapper)
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