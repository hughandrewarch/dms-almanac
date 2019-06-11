package com.api.weave.models

data class Person(
        val id: Long,
        val name: String,
        val race: String, //enum?
        val description: String
)

data class PersonPage(
        val person: Person
)
data class PersonRelation(
        val id: Long,
        val relatedId: Long,
        val relation: PersonRelationType
)

enum class PersonRelationType {
    DENIZEN,
    OWNER,
    WORKER,
    MEMBER,
}
