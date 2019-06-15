package app.models

import app.models.list.ListItem
import models.Settlement

//TODO rename to response?
data class SettlementPage(
        val settlement: Settlement,
        var placeList: List<ListItem> = emptyList(),
        var personList: List<ListItem> = emptyList()
)
