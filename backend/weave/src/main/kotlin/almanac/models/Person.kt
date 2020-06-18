package almanac.models

data class Person(
        val id: Long,
        val name: String,
        val race: String, //enum?
        val description: String
)
