package almanac.ports.persistence

import almanac.models.Relation

interface RelationRepository {
    fun create(leftId: Long, rightId: Long, relationTypeId: Long): Relation
    fun findAll(): List<Relation>
}