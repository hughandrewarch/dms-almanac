package almanac.adapters.jdbc

import almanac.adapters.jdbc.util.preparedStatementCreator
import almanac.exceptions.RelationTypeAlreadyExistsException
import almanac.exceptions.RelationTypeNotFoundException
import almanac.models.RelationType
import almanac.ports.persistence.RelationTypeRepository
import org.springframework.dao.DuplicateKeyException
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.jdbc.support.GeneratedKeyHolder
import org.springframework.jdbc.support.KeyHolder

class JdbcRelationTypeRepository(private val jdbcTemplate: JdbcTemplate) : RelationTypeRepository {

    override fun create(name: String): RelationType {
        val keyHolder: KeyHolder = GeneratedKeyHolder()

        try {
            jdbcTemplate.update(preparedStatementCreator("""
                insert into relation_type (name)
                values 
                (?)
            """
            ) { ps ->
                ps.setString(1, name)
            }, keyHolder)
        } catch (e: DuplicateKeyException) {
            throw RelationTypeAlreadyExistsException(name)
        }

        val id = keyHolder.key!!.toLong()

        return find(id)
    }

    override fun find(id: Long): RelationType {
        return jdbcTemplate.query(
            """select id, name from relation_type where id = ?""",
            mapper,
            id
        ).singleOrNull() ?: throw RelationTypeNotFoundException(id)
    }

    override fun findAll(): List<RelationType> {
        return jdbcTemplate.query(
            """select id, name from relation_type""",
            mapper
        )
    }
}

private val mapper = RowMapper { rs, _ ->
    RelationType(
        id = rs.getLong("id"),
        name = rs.getString("name")
    )
}