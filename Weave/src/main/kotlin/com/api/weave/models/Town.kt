package com.api.weave.models

import com.api.weave.models.list.ListItem

data class Town(
        val id: Long,
        val name: String,
        val population: Long,
        val description: String
)
data class TownPage(
        val town: Town,
        var spotList: List<ListItem> = emptyList(),
        var personList: List<ListItem> = emptyList()
)