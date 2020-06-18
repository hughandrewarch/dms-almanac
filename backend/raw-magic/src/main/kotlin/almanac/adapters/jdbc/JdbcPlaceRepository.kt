package almanac.adapters.jdbc

import almanac.exceptions.PlaceNotFoundException
import almanac.adapters.jdbc.util.preparedStatementCreator
import almanac.models.Place
import almanac.models.PlaceType
import almanac.ports.persistence.PlaceRepository
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.jdbc.support.GeneratedKeyHolder
import org.springframework.jdbc.support.KeyHolder

class JdbcPlaceRepository(private val jdbcTemplate: JdbcTemplate) : PlaceRepository {

    override fun find(id: Long): Place {
        return jdbcTemplate.query(
                """select id, name, description, type from place where id = ?""",
                mapper,
                id
        ).singleOrNull() ?: throw PlaceNotFoundException(id)
    }

    override fun findAll(): List<Place> {
        return jdbcTemplate.query(
                """select id, name, description, type from place""",
                mapper
        )

    }

    override fun create(name: String, description: String, type: PlaceType): Place {
        val keyHolder: KeyHolder = GeneratedKeyHolder()

        jdbcTemplate.update(preparedStatementCreator("""
                insert into place (name, description, type)
                values
                (?, ?, ?)
            """
        ) { ps ->
            ps.setString(1, name)
            ps.setString(2, description)
            ps.setString(3, type.toString())
        }, keyHolder)

        val id = keyHolder.key!!.toLong()

        return find(id)
    }
}

private val mapper = RowMapper { rs, _ ->
    Place(
            id = rs.getLong("id"),
            name = rs.getString("name"),
            description = rs.getString("description"),
            type = PlaceType.valueOf(rs.getString("type"))
    )
}