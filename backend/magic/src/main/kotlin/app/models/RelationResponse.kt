package app.models

data class RelationResponse(
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
