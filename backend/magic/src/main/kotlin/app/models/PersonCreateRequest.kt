package app.models

import com.fasterxml.jackson.annotation.JsonProperty

data class PersonCreateRequest(

        @JsonProperty("name")
        var name: String,

        @JsonProperty("description")
        var description: String,

        @JsonProperty("race")
        var race: String //Todo turn into enum
)
