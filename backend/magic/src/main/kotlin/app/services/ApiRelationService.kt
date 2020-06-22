package app.services

import almanac.ports.api.RelationRepository
import app.models.RelationCreateRequest
import app.models.RelationResponse
import app.serializers.RelationResponseSerializer
import org.springframework.stereotype.Component

@Component
class ApiRelationService(
    private val relationRepository: RelationRepository,
    private val relationResponseSerializer: RelationResponseSerializer
) {

    fun findAll(): List<RelationResponse> {
        val relations = relationRepository.findAll()

        return relations.map {
            RelationResponse(it.left, it.right, it.relationType.id)
        }
    }

    fun linkSettlementPerson(request: RelationCreateRequest): RelationResponse {
        val relation = relationRepository.linkSettlementPerson(request.left, request.right)
        return relationResponseSerializer.serialize(relation)
    }
}
