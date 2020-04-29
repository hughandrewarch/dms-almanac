package app.services

import almanac.models.RelationType
import almanac.ports.api.RelationTypeRepository
import org.springframework.stereotype.Component

@Component
class ApiRelationTypeService(private val relationTypeRepository: RelationTypeRepository) {

    fun findAll(): List<RelationType> {
        return relationTypeRepository.findAll()
    }
}
