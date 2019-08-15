package app.models

import almanac.models.SettlementType
import com.fasterxml.jackson.annotation.JsonProperty

data class SettlementCreateRequest(

        @JsonProperty("name")
        var name: String,

        @JsonProperty("population")
        var population: Long,

        @JsonProperty("description")
        var description: String,

        @JsonProperty("type")
        var type: SettlementType
)
