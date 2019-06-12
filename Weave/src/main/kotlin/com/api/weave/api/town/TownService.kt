package com.api.weave.api.town

import com.api.weave.api.person.PersonService
import com.api.weave.api.place.PlaceService
import com.api.weave.models.TownPage
import com.api.weave.models.list.ListItem
import org.springframework.stereotype.Component

@Component
class TownService(
        private val townRepository: TownRepository,
        private val personService: PersonService,
        private val placeService: PlaceService) {

    //TODO add page serializers
    //TODO add List<ListItem> serializer
    fun findOne(id: Long): TownPage {

        val town = townRepository.find(id)
        val placeList = placeService.listPlaces(town.id)
        val personList = personService.listDenizens(town.id)

        return TownPage(
                town = town,
                placeList = placeList,
                personList = personList)
    }

    fun listTowns(): List<ListItem> {
        return townRepository.findAll().map {
            ListItem(it.id, it.name)
        }
    }
}
