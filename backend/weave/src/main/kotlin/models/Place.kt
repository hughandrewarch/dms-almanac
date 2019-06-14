package models

data class Place(
        val id: Long,
        val name: String,
        val description: String,
        val type: PlaceType
)

enum class PlaceType {
    GUILD,
    TAVERN,
    SHOP
}

data class PlaceRelation(
        val id: Long,
        val settlementId: Long
)