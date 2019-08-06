package almanac.jdbc.adapters

import almanac.exceptions.StatBlockExistsException
import almanac.exceptions.StatBlockNotFoundException
import almanac.jdbc.util.preparedStatementCreator
import almanac.models.StatBlock
import almanac.ports.persistence.StatBlockRepository
import org.springframework.dao.EmptyResultDataAccessException
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.jdbc.support.GeneratedKeyHolder
import org.springframework.jdbc.support.KeyHolder

class JdbcStatBlockRepository(private val jdbcTemplate: JdbcTemplate) : StatBlockRepository {
    override fun create(personId: Long, str: Int, dex: Int, con: Int, int: Int, wis: Int, cha: Int): StatBlock {
        val keyHolder: KeyHolder = GeneratedKeyHolder()

        throwStatBlockExistsExceptionIfNotEmpty(personId) {
            jdbcTemplate.queryForList("""
                select id from person_stat_block where person_id = ?
            """.trimIndent(), personId)
        }

        jdbcTemplate.update(preparedStatementCreator("""
                insert into stat_block (str, dex, con, int_, wis, cha)
                values 
                (?, ?, ?, ?, ?, ?)
            """.trimIndent()
        ) { ps ->
            ps.setInt(1, str)
            ps.setInt(2, dex)
            ps.setInt(3, con)
            ps.setInt(4, int)
            ps.setInt(5, wis)
            ps.setInt(6, cha)
        }, keyHolder)

        val statBlockId = keyHolder.key!!.toLong()

        jdbcTemplate.update(preparedStatementCreator("""
                insert into person_stat_block (person_id, stat_block_id)
                values 
                (?, ?)
            """
        ) { ps ->
            ps.setLong(1, personId)
            ps.setLong(2, statBlockId)
        }, keyHolder)

        return find(personId)
    }

    override fun find(personId: Long): StatBlock {
        try {
            return jdbcTemplate.queryForObject(
                    """
                        select psb.person_id, str, dex, con, int_, wis, cha
                        from stat_block sb, person_stat_block psb
                        where psb.person_id = ? 
                        and psb.stat_block_id = sb.id
                    """.trimMargin(),
                    mapper,
                    personId
            )!!
        } catch (e: EmptyResultDataAccessException) {
            throw StatBlockNotFoundException(personId)
        }
    }

    override fun clear() {
        jdbcTemplate.update("""delete from person_stat_block""")
        jdbcTemplate.update("""delete from person""")
        jdbcTemplate.update("""delete from stat_block""")
    }

    private val mapper = RowMapper { rs, _ ->
        StatBlock.of(
                personId = rs.getLong("person_id"),
                str = rs.getInt("str"),
                dex = rs.getInt("dex"),
                con = rs.getInt("con"),
                int = rs.getInt("int_"),
                wis = rs.getInt("wis"),
                cha = rs.getInt("cha")
        )
    }

    private fun throwStatBlockExistsExceptionIfNotEmpty(personId: Long, fn: () -> List<Any>) {

        if (fn().isNotEmpty()) {
            throw StatBlockExistsException(personId)
        }
    }

}
