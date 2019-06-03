package com.api.weave.models

data class Town(val id: Long, val name: String)
data class Town2(
        val id: Long,
        val name: String,
        val population: Long,
        val description: String,
        var spots: List<Spot> = emptyList(),
        var people: List<Person> = emptyList()
)