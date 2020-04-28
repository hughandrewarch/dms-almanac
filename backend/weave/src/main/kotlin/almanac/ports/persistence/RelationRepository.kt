package almanac.ports.persistence

import almanac.models.Relation

interface RelationRepository {
    fun create(left: Long, right: Long, relationType: Long): Boolean
    fun findAll(): List<Relation>
}