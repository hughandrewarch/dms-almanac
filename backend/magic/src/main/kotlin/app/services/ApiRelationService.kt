package app.services

import almanac.ports.api.RelationRepository
import almanac.ports.api.RelationTypeRepository
import app.models.RelationResponse2
import org.springframework.stereotype.Component

@Component
class ApiRelationService(
        private val relationRepository: RelationRepository,
        private val relationTypeRepository: RelationTypeRepository) {

    fun findAll(): List<RelationResponse2> {
        val relations = relationRepository.findAll()
        val relationTypes: Map<Long, String> = relationTypeRepository.findAll().associate { it.id to it.name }

        return relations.map {
            RelationResponse2(it.left, it.right, it.relationType.id)
        }
    }
}
