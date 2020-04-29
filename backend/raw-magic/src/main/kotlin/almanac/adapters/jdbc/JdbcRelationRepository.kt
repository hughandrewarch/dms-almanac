package almanac.adapters.jdbc

import almanac.adapters.jdbc.util.preparedStatementCreator
import almanac.exceptions.RelationTypeNotFoundException
import almanac.models.Relation
import almanac.models.RelationType
import almanac.ports.persistence.RelationRepository
import org.springframework.dao.DataIntegrityViolationException
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper

class JdbcRelationRepository(private val jdbcTemplate: JdbcTemplate) : RelationRepository {

    override fun create(left: Long, right: Long, relationType: Long): Boolean {
        return try {
            jdbcTemplate.update(preparedStatementCreator("""
                insert into relation (left_id, right_id, relation_type_id)
                values
                (?, ?, ?)
            """
            ) { ps ->
                ps.setLong(1, left)
                ps.setLong(2, right)
                ps.setLong(3, relationType)
            }) > 0
        } catch (e: DataIntegrityViolationException) {
            throw RelationTypeNotFoundException(relationType)
        }
    }

    override fun findAll(): List<Relation> {

        return jdbcTemplate.query(
            """select r.left_id, r.right_id, r.relation_type_id, rt.name
|                   from relation r left join relation_type rt on r.relation_type_id = rt.id""".trimMargin(),
            mapper
        )
    }
}

private val mapper = RowMapper { rs, _ ->
    Relation(
        left = rs.getLong("left_id"),
        right = rs.getLong("right_id"),
        relationType = RelationType(
            id = rs.getLong("relation_type_id"),
            name = rs.getString("name")
        )

    )
}