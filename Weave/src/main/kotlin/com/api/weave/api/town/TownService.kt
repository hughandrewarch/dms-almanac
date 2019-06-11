package com.api.weave.api.town

import com.api.weave.api.person.PersonService
import com.api.weave.api.person.allFullPeople
import com.api.weave.models.*
import com.api.weave.models.list.ListItem
import org.springframework.stereotype.Component

@Component
class TownService(private val personService: PersonService) {

    //TODO add town serializer
    //TODO extract spots service
    fun findOne(id: Long): TownPage {
        val town = allFullTowns.first { it.id == id }
        val spotList = spotList.filter { it.townId == id }.map { ListItem(it.id, it.name) }
        val personList = personService.listDenizens(town.id)

        return TownPage(
                town = town,
                spotList = spotList,
                personList = personList)
    }

    fun listTowns(): List<ListItem> {
        return allFullTowns.map {
            ListItem(it.id, it.name)
        }
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
