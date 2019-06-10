package com.api.weave.controllers

import com.api.weave.models.Person
import com.api.weave.models.Spot
import com.api.weave.models.Town
import com.api.weave.models.TownPage
import com.api.weave.models.list.ListItem
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class TownController {

    @GetMapping("/towns")
    fun towns() =
            listOf(
                    ListItem(1, "Hughan"),
                    ListItem(2, "Amberlea"),
                    ListItem(3, "Roseport"),
                    ListItem(4, "Elkshorn")
            )

    @GetMapping("/town/{id}")
    fun towns(@PathVariable id: Long): TownPage {
        val town = allFullTowns.first { it.id == id }
        val spotList = spotList.filter { it.townId == id }.map { ListItem(it.id, it.name) }
        val personList = personList.filter { it.townId == id }.map { ListItem(it.id, it.name) }

        val townPage = TownPage(
                town = town,
                spotList = spotList,
                personList = personList
        )
        return townPage
    }
}

val allFullTowns = listOf(
        Town(
                id = 1,
                name = "Hughan",
                population = 5000,
                description = "Capital city, 3 wall layers, 9 districts and a castle"),
        Town(
                id = 2,
                name = "Amberlea",
                population = 1000,
                description = "farming central, fortified storehouses, elevated on walls"),
        Town(
                id = 3,
                name = "Roseport",
                population = 800,
                description = "largest port city"),
        Town(
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

val personList = listOf(
        Person(id = 1, name = "person a", townId = 1),
        Person(id = 2, name = "person b", townId = 1),
        Person(id = 3, name = "person c", townId = 2),
        Person(id = 4, name = "person d", townId = 2),
        Person(id = 5, name = "person e", townId = 2),
        Person(id = 6, name = "person f", townId = 3),
        Person(id = 7, name = "person g", townId = 4),
        Person(id = 8, name = "person h", townId = 4)
)