package almanac.adapters.jdbc

import almanac.exceptions.SettlementNotFoundException
import almanac.adapters.jdbc.util.preparedStatementCreator
import almanac.models.Settlement
import almanac.models.SettlementType
import almanac.ports.persistence.SettlementRepository
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.jdbc.support.GeneratedKeyHolder
import org.springframework.jdbc.support.KeyHolder

class JdbcSettlementRepository(private val jdbcTemplate: JdbcTemplate) : SettlementRepository {
    override fun find(id: Long): Settlement {
        return jdbcTemplate.query("""
                    select id, name, population, description, type
                    from settlement where id = ?
                    """.trimIndent(),
                mapper,
                id
        ).singleOrNull() ?: throw SettlementNotFoundException(id)
    }

    override fun findAll(): List<Settlement> {
        return jdbcTemplate.query(
                """select id, name, population, description, type from settlement""",
                mapper
        )
    }

    override fun create(name: String, population: Long, description: String, type: SettlementType): Settlement {
        val keyHolder: KeyHolder = GeneratedKeyHolder()

        jdbcTemplate.update(preparedStatementCreator("""
                insert into settlement (name, population, description, type)
                values 
                (?, ?, ?, ?)
            """
        ) { ps ->
            ps.setString(1, name)
            ps.setLong(2, population)
            ps.setString(3, description)
            ps.setString(4, type.toString())
        }, keyHolder)

        val id = keyHolder.key!!.toLong()

        return find(id)
    }
}

private val mapper = RowMapper { rs, _ ->
    Settlement(
            id = rs.getLong("id"),
            name = rs.getString("name"),
            population = rs.getLong("population"),
            description = rs.getString("description"),
            type = SettlementType.valueOf(rs.getString("type"))
    )
}