package com.api.weave.api.place

import com.api.weave.models.list.ListItem
import org.springframework.stereotype.Component

@Component
class PlaceService(private val placeRepository: PlaceRepository) {

    fun listPlaces(settlementId: Long): List<ListItem> {
        return placeRepository.findAll(settlementId)
                .map { ListItem(it.id, it.name) }
    }
}