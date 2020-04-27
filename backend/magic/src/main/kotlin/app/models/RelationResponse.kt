package app.models

data class RelationResponse(
        val relations: List<Relation>
)

//Todo maybe make domain object
data class Relation(
        val left: Long,
        val right: Long,
        val relation: String
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
