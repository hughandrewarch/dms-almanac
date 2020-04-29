package almanac.ports.api

import almanac.models.RelationType

interface RelationTypeRepository {
    fun findAll(): List<RelationType>
}