package com.api.weave.controllers

import com.api.weave.models.*
import com.api.weave.models.list.ListItem
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class TownController {

    //TODO extract Town service to prep for db
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
        val personIds = personListCon.filter {
            it.relation == PersonConnection.DENIZEN && it.relatedId == id
        }.map { it.id }

        val personList = allFullPeople.filter { personIds.contains(it.id) }.map { ListItem(it.id, it.name) }

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

val personListCon = listOf(
        PersonCon(id =  1, relatedId = 1, relation = PersonConnection.DENIZEN),
        PersonCon(id =  2, relatedId = 1, relation = PersonConnection.DENIZEN),
        PersonCon(id =  3, relatedId = 2, relation = PersonConnection.DENIZEN),
        PersonCon(id =  4, relatedId = 2, relation = PersonConnection.DENIZEN),
        PersonCon(id =  5, relatedId = 2, relation = PersonConnection.DENIZEN),
        PersonCon(id =  6, relatedId = 3, relation = PersonConnection.DENIZEN),
        PersonCon(id =  7, relatedId = 4, relation = PersonConnection.DENIZEN),
        PersonCon(id =  8, relatedId = 4, relation = PersonConnection.DENIZEN),
        PersonCon(id =  9, relatedId = 1, relation = PersonConnection.MEMBER),
        PersonCon(id = 10, relatedId = 1, relation = PersonConnection.OWNER)
)