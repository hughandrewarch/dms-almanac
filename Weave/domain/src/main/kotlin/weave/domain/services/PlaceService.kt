package weave.domain.services

import com.api.weave.domain.models.Place
import com.api.weave.domain.ports.spi.PlaceRepository

class PlaceService(private val placeRepository: PlaceRepository) {

    fun findPlaces(settlementId: Long): List<Place> {
        return placeRepository.findAll(settlementId)
    }
}