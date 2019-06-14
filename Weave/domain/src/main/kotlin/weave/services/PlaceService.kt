package weave.services

import weave.models.Place
import weave.ports.persistence.PlaceRepository

class PlaceService(private val placeRepository: PlaceRepository) {

    fun findPlaces(settlementId: Long): List<Place> {
        return placeRepository.findAll(settlementId)
    }
}