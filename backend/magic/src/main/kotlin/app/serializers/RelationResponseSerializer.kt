package app.serializers

import almanac.models.Relation
import app.models.RelationResponse
import org.springframework.stereotype.Component

@Component
class RelationResponseSerializer {
    fun serialize(relation: Relation): RelationResponse {
        return RelationResponse(
            left = relation.left,
            right = relation.right,
            relationType = relation.relationType.id
        )
    }
}