package app.models

data class RelationResponse1(
        val settlementRelations: Map<Long, Relation>
        //
)

data class PersonRelation(
        val person: Long,
        val related: Long,
        val type: String,
        val description: String?
)

/*
    RelationType:
        id: ...,
        type: SettlementPerson

    Relation:
        left: id, (object)
        right: id, (object)
        relation: id, (relation)
        description: text (maybe type?)

*/

/*
    Relation
        Id
        Type
        description

    State
    Relations {
        PersonRelations {
            id: [{
                relation:
                relationId:
                type:
            }, ...
            ]
        },
    }

 */

//TODO make domain object?
data class Relation(val id: Long)
