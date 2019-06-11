package com.api.weave.api.town

import com.api.weave.api.person.PersonService
import com.api.weave.models.Spot
import com.api.weave.models.TownPage
import com.api.weave.models.list.ListItem
import org.springframework.stereotype.Component

@Component
class TownService(
        private val townRepository: TownRepository,
        private val personService: PersonService) {

    //TODO add page serializers
    //TODO add List<ListItem> serializer
    fun findOne(id: Long): TownPage {

        val town = townRepository.find(id)
        val spotList = spotList.filter { it.townId == id }.map { ListItem(it.id, it.name) }
        val personList = personService.listDenizens(town.id)

        return TownPage(
                town = town,
                spotList = spotList,
                personList = personList)
    }

    fun listTowns(): List<ListItem> {
        return townRepository.findAll().map {
            ListItem(it.id, it.name)
        }
    }
}

//TODO extract spots service
val spotList = listOf(
        Spot(id = 1, name = "poi1a", townId = 1),
        Spot(id = 2, name = "poi1b", townId = 1),
        Spot(id = 3, name = "poi1c", townId = 1),
        Spot(id = 4, name = "poi2a", townId = 2),
        Spot(id = 5, name = "poi3a", townId = 3),
        Spot(id = 6, name = "poi3b", townId = 3),
        Spot(id = 7, name = "poi4a", townId = 4)
)
