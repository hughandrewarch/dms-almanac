package almanac.ports.persistence

import almanac.models.RelationType

interface RelationTypeRepository {
    fun create(name: String): RelationType
    fun find(id: Long): RelationType
    fun findByName(name: String): RelationType
    fun findAll(): List<RelationType>
}