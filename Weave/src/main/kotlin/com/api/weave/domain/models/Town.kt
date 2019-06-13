package com.api.weave.domain.models

//TODO rename to settlement
data class Town(
        val id: Long,
        val name: String,
        val population: Long,
        val description: String,
        val type: TownType
)

enum class TownType {
    VILLAGE,
    TOWN,
    CITY
}
