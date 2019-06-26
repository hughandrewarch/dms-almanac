package almanac.models

data class Person(
        val id: Long,
        val name: String,
        val race: String, //enum?
        val description: String
)

data class PersonRelation(
        val id: Long,
        val relation: PersonRelationType,
        val relationId: Long
        )

enum class PersonRelationType {
    DENIZEN,
    OWNER,
    WORKER,
    MEMBER,
}
