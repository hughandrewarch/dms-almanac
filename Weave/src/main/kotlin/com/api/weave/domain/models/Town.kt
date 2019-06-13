package com.api.weave.domain.models

import com.api.weave.domain.models.list.ListItem

//TODO rename to settlement
data class Town(
        val id: Long,
        val name: String,
        val population: Long,
        val description: String,
        val type: TownType
)

data class TownPage(
        val town: Town,
        var placeList: List<ListItem> = emptyList(),
        var personList: List<ListItem> = emptyList()
)

enum class TownType {
    VILLAGE,
    TOWN,
    CITY
}
