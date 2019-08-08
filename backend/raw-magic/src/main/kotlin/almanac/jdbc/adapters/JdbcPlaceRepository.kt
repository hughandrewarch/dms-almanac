package almanac.jdbc.adapters

import almanac.exceptions.PlaceNotFoundException
import almanac.jdbc.util.preparedStatementCreator
import almanac.models.Place
import almanac.models.PlaceType
import almanac.ports.persistence.PlaceRepository
import org.springframework.dao.EmptyResultDataAccessException
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

    override fun createRelation(settlementId: Long, placeId: Long) {
        jdbcTemplate.update(preparedStatementCreator("""
                insert into settlement_place (place_id, settlement_id)
                values
                (?, ?)
            """
        ) { ps ->
            ps.setLong(1, placeId)
            ps.setLong(2, settlementId)
        })
    }

    override fun findAll(settlementId: Long): List<Place> {
        return jdbcTemplate.query(preparedStatementCreator("""
                select p.id, name, description, type
                from place p, settlement_place sp
                where p.id = sp.place_id
                and sp.settlement_id = ?
                """.trimMargin()
        ) { ps ->
            ps.setLong(1, settlementId)
        }, mapper)
    }

    override fun clear() {
        jdbcTemplate.update("""delete from settlement_place""")
        jdbcTemplate.update("""delete from place""")
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