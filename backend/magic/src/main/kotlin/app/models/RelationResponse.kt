package app.models

import almanac.models.Relation

data class RelationResponse1(
    val relations: List<Relation>
)

data class RelationResponse2(
    val left: Long,
    val right: Long,
    val relationType: Long
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
