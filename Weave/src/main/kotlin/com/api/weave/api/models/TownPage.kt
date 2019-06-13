package com.api.weave.api.models

import com.api.weave.domain.models.Town
import com.api.weave.api.models.list.ListItem

//TODO rename to settlement and response
data class TownPage(
        val town: Town,
        var placeList: List<ListItem> = emptyList(),
        var personList: List<ListItem> = emptyList()
)
