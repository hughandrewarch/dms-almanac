package almanac.models

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

data class SettlementPlace(
        val settlementId: Long,
        val placeId: Long
)