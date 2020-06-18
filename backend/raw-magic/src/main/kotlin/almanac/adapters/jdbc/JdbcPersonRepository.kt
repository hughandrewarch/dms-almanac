package almanac.adapters.jdbc

import almanac.exceptions.PersonNotFoundException
import almanac.adapters.jdbc.util.preparedStatementCreator
import almanac.models.Person
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
}

private val mapper = RowMapper { rs, _ ->
    Person(
            id = rs.getLong("id"),
            name = rs.getString("name"),
            race = rs.getString("race"),
            description = rs.getString("description")
    )
}