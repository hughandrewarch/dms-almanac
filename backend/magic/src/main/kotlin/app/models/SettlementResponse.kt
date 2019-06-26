package app.models

import app.models.list.ListItem
import almanac.models.Settlement

data class SettlementResponse(
        val settlement: Settlement,
        var placeList: List<ListItem> = emptyList(),
        var personList: List<ListItem> = emptyList()
)
