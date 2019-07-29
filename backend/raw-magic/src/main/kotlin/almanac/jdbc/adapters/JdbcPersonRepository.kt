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

    private var people: MutableList<Person> = mutableListOf()
    private var relations: MutableList<PersonRelation> = mutableListOf()

    override fun find(id: Long): Person {
        try {
            return jdbcTemplate.queryForObject(
                    """select id, name, race, description from person where id = ?""",
                    RowMapper { rs, _ ->
                        Person(
                                id = rs.getLong("id"),
                                name = rs.getString("name"),
                                race = rs.getString("race"),
                                description = rs.getString("description")
                        )
                    },
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
                RowMapper { rs, _ ->
                    Person(
                            id = rs.getLong("id"),
                            name = rs.getString("name"),
                            race = rs.getString("race"),
                            description = rs.getString("description")
                    )
                }
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

    //TODO relation, also match with line 35
    override fun findAll(relation: PersonRelationType, relatedId: Long): List<Person> {

        val people = jdbcTemplate.query(
                """select id, name, race, description from person""",
                RowMapper { rs, _ ->
                    Person(
                            id = rs.getLong("id"),
                            name = rs.getString("name"),
                            race = rs.getString("race"),
                            description = rs.getString("description")
                    )
                }
        )

        val personIds = relations
                .filter {
                    it.relation == relation && it.relationId == relatedId
                }.map { it.id }

        return people.filter { personIds.contains(it.id) }
    }

    fun init() {
        people = allFullPeople
    }

    override fun clear() {
        jdbcTemplate.update("""delete from person""")
    }
}

val allFullPeople = mutableListOf(
        Person(id = 1, name = "controllers a", race = "dwarf", description = "npc a"),
        Person(id = 2, name = "controllers b", race = "elf", description = "npc b"),
        Person(id = 3, name = "controllers c", race = "half-elf", description = "npc c"),
        Person(id = 4, name = "controllers d", race = "tiefling", description = "npc d"),
        Person(id = 5, name = "controllers e", race = "human", description = "npc e"),
        Person(id = 6, name = "controllers f", race = "human", description = "npc f"),
        Person(id = 7, name = "controllers g", race = "dragonborn", description = "npc g"),
        Person(id = 8, name = "controllers h", race = "dwarf", description = "npc h"),
        Person(id = 9, name = "controllers i", race = "dwarf", description = "npc i"),
        Person(id = 10, name = "controllers j", race = "dwarf", description = "npc j")
)

val personListCon = listOf(
        PersonRelation(id = 1, relation = PersonRelationType.DENIZEN, relationId = 1),
        PersonRelation(id = 2, relation = PersonRelationType.DENIZEN, relationId = 1),
        PersonRelation(id = 3, relation = PersonRelationType.DENIZEN, relationId = 2),
        PersonRelation(id = 4, relation = PersonRelationType.DENIZEN, relationId = 2),
        PersonRelation(id = 5, relation = PersonRelationType.DENIZEN, relationId = 2),
        PersonRelation(id = 6, relation = PersonRelationType.DENIZEN, relationId = 3),
        PersonRelation(id = 7, relation = PersonRelationType.DENIZEN, relationId = 4),
        PersonRelation(id = 8, relation = PersonRelationType.DENIZEN, relationId = 4),
        PersonRelation(id = 9, relation = PersonRelationType.MEMBER, relationId = 1),
        PersonRelation(id = 10, relation = PersonRelationType.OWNER, relationId = 1)
)