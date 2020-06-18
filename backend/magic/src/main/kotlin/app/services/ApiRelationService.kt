package app.services

import almanac.ports.api.RelationRepository
import almanac.ports.api.RelationTypeRepository
import app.models.RelationResponse
import org.springframework.stereotype.Component

@Component
class ApiRelationService(
        private val relationRepository: RelationRepository,
        private val relationTypeRepository: RelationTypeRepository) {

    fun findAll(): List<RelationResponse> {
        val relations = relationRepository.findAll()
        val relationTypes: Map<Long, String> = relationTypeRepository.findAll().associate { it.id to it.name }

        return relations.map {
            RelationResponse(it.left, it.right, it.relationType.id)
        }
    }
}
