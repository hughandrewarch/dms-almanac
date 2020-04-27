package almanac.ports.persistence

import almanac.models.Relation

interface RelationRepository {
    fun create(left: Long, right: Long, relation: Long): Relation
    fun findAll(): List<Relation>
}