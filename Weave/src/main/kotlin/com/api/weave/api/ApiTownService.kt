package com.api.weave.api

import com.api.weave.api.models.TownPage
import com.api.weave.api.serializer.ListSerializer
import com.api.weave.api.serializer.TownPageSerializer
import com.api.weave.domain.PersonService
import com.api.weave.api.models.list.ListItem
import com.api.weave.domain.ports.api.PlaceRepository
import com.api.weave.domain.ports.api.TownRepository
import org.springframework.stereotype.Component

@Component
class ApiTownService(
        private val listSerializer: ListSerializer,
        private val townPageSerializer: TownPageSerializer,
        private val townRepository: TownRepository,
        private val placeRepository: PlaceRepository,
        private val personService: PersonService) {

  fun find(id: Long): TownPage {
        val town = townRepository.find(id)
        val placeList = placeRepository.findAll(town.id)
        val personList = personService.listDenizens(town.id)

        return townPageSerializer.serialize(town, placeList, personList)
    }

    fun findAll(): List<ListItem> {
        return listSerializer.town(townRepository.findAll())
    }
}
