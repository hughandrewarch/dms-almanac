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
data class PersonCon(
        val id: Long,
        val relatedId: Long,
        val relation: PersonConnection
)

enum class PersonConnection {
    DENIZEN,
    OWNER,
    WORKER,
    MEMBER,
}