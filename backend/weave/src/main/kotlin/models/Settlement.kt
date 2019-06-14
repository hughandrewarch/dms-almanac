package models

data class Settlement(
        val id: Long,
        val name: String,
        val population: Long,
        val description: String,
        val type: SettlementType
)

enum class SettlementType {
    VILLAGE,
    TOWN,
    CITY
}
