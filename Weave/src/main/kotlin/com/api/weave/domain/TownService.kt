package com.api.weave.domain

import com.api.weave.domain.ports.spi.TownRepository
import com.api.weave.domain.models.TownPage
import com.api.weave.domain.models.list.ListItem
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
