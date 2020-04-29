package almanac.ports.api

import almanac.models.Relation

interface RelationRepository {
    fun findAll(): List<Relation>
}