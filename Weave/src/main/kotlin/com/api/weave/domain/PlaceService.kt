package com.api.weave.domain

import com.api.weave.domain.models.Place
import com.api.weave.domain.ports.spi.PlaceRepository
import org.springframework.stereotype.Component

@Component
class PlaceService(private val placeRepository: PlaceRepository) {

    fun findPlaces(settlementId: Long): List<Place> {
        return placeRepository.findAll(settlementId)
    }
}