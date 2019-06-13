package weave.api.models

import com.api.weave.domain.models.Settlement
import com.api.weave.api.models.list.ListItem

//TODO rename to response?
data class SettlementPage(
        val settlement: Settlement,
        var placeList: List<ListItem> = emptyList(),
        var personList: List<ListItem> = emptyList()
)
