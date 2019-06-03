package com.api.weave.controllers

import com.api.weave.models.Person
import com.api.weave.models.Spot
import com.api.weave.models.Town
import com.api.weave.models.Town2
import org.springframework.web.bind.annotation.*

@RestController
class TownController {

    @GetMapping("/towns")
    fun towns() =
            listOf(
                    Town(1, "Hughan"),
                    Town(2, "Amberlea"),
                    Town(3, "Roseport"),
                    Town(4, "Elkshorn")
            )

    @GetMapping("/town/{id}")
    fun towns(@PathVariable id: Long): Town2 {
        var town = allFullTowns.first { it.id == id }

        val spots = spotList.filter { it.townId == id }
        val people = peopleList.filter { it.townId == id }

        town.spots = spots
        town.people = people

        return town
    }
}

val allFullTowns = listOf(
        Town2(
                id = 1,
                name = "Hughan",
                population = 5000,
                description = "Capital city, 3 wall layers, 9 districts and a castle"),
        Town2(
                id = 2,
                name = "Amberlea",
                population = 1000,
                description = "farming central, fortified storehouses, elevated on walls"),
        Town2(
                id = 3,
                name = "Roseport",
                population = 800,
                description = "largest port city"),
        Town2(
                id = 4,
                name = "Elkshorn",
                population = 500,
                description = "small hunting village on the edge of the fireleaf forest")
)

val spotList = listOf(
        Spot(id = 1, name = "poi1a", townId = 1),
        Spot(id = 2, name = "poi1b", townId = 1),
        Spot(id = 3, name = "poi1c", townId = 1),
        Spot(id = 4, name = "poi2a", townId = 2),
        Spot(id = 5, name = "poi3a", townId = 3),
        Spot(id = 6, name = "poi3b", townId = 3),
        Spot(id = 7, name = "poi4a", townId = 4)
)

val peopleList = listOf(
        Person(id = 1, name = "person a", townId = 1),
        Person(id = 2, name = "person b", townId = 1),
        Person(id = 3, name = "person c", townId = 2),
        Person(id = 4, name = "person d", townId = 2),
        Person(id = 5, name = "person e", townId = 2),
        Person(id = 6, name = "person f", townId = 3),
        Person(id = 7, name = "person g", townId = 4),
        Person(id = 8, name = "person h", townId = 4)
)