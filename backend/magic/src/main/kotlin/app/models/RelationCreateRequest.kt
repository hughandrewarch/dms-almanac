package app.models

import com.fasterxml.jackson.annotation.JsonProperty

data class RelationCreateRequest(

        @JsonProperty("left")
        var left: Long,

        @JsonProperty("right")
        var right: Long
)
