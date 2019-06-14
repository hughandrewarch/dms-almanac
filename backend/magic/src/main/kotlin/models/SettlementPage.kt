package models

import models.list.ListItem

//TODO rename to response?
data class SettlementPage(
        val settlement: Settlement,
        var placeList: List<ListItem> = emptyList(),
        var personList: List<ListItem> = emptyList()
)
