package com.api.weave.domain

import com.api.weave.domain.ports.spi.PlaceRepository
import com.api.weave.domain.models.list.ListItem
import org.springframework.stereotype.Component

@Component
class PlaceService(private val placeRepository: PlaceRepository) {

    fun listPlaces(settlementId: Long): List<ListItem> {
        return placeRepository.findAll(settlementId)
                .map { ListItem(it.id, it.name) }
    }
}