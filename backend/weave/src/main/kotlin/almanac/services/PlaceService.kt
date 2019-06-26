package almanac.services

import almanac.models.Place
import almanac.ports.persistence.PlaceRepository

class PlaceService(private val placeRepository: PlaceRepository) {

    fun findPlaces(settlementId: Long): List<Place> {
        return placeRepository.findAll(settlementId)
    }
}