package almanac.services

import almanac.models.RelationType
import almanac.ports.persistence.RelationTypeRepository

class RelationTypeService(private val relationTypeRepository: RelationTypeRepository) {

    fun findAll(): List<RelationType> {
        return relationTypeRepository.findAll()
    }
}