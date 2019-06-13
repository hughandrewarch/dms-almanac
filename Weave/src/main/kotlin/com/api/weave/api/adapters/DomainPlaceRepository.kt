package com.api.weave.api.adapters

import com.api.weave.domain.services.PlaceService
import com.api.weave.domain.models.Place
import com.api.weave.domain.ports.api.PlaceRepository
import org.springframework.stereotype.Component

@Component
class DomainPlaceRepository(private val service: PlaceService): PlaceRepository {

    override fun findAll(settlementId: Long): List<Place> {
        return service.findPlaces(settlementId)
    }
}
