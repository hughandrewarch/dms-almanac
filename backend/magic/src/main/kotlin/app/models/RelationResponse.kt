package app.models

import almanac.models.Relation

data class RelationResponse(
        val relations: List<Relation>
)

/*
    State
    Relations {
        PersonRelations {
            id: [{
                relation:
                relationId:
            }, ...
            ]
        },
    }
 */
