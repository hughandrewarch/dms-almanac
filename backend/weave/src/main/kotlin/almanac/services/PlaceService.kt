package almanac.services

import almanac.models.Place
import almanac.models.PlaceType
import almanac.ports.persistence.PlaceRepository

class PlaceService(private val placeRepository: PlaceRepository) {

    fun create(name: String, description: String, type: PlaceType): Place {
        return placeRepository.create(name, description, type)
    }
}