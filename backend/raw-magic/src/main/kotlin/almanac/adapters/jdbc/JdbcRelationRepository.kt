package almanac.adapters.jdbc

import almanac.adapters.jdbc.util.preparedStatementCreator
import almanac.exceptions.RelationTypeNotFoundException
import almanac.models.Relation
import almanac.models.RelationType
import almanac.ports.persistence.RelationRepository
import almanac.ports.persistence.RelationTypeRepository
import org.springframework.dao.DataIntegrityViolationException
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper

class JdbcRelationRepository(private val jdbcTemplate: JdbcTemplate,
                             private val relationTypeRepository: RelationTypeRepository) : RelationRepository {

    override fun create(leftId: Long, rightId: Long, relationTypeId: Long): Relation {
        val relationType = relationTypeRepository.find(relationTypeId)

        try {
            jdbcTemplate.update(preparedStatementCreator("""
                insert into relation (left_id, right_id, relation_type_id)
                values
                (?, ?, ?)
            """
            ) { ps ->
                ps.setLong(1, leftId)
                ps.setLong(2, rightId)
                ps.setLong(3, relationTypeId)
            }) > 0

            return Relation(leftId, rightId, relationType)
        } catch (e: DataIntegrityViolationException) {
            throw RelationTypeNotFoundException(relationTypeId)
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