package almanac.ports.api

import almanac.models.Place
import almanac.models.PlaceType

interface PlaceRepository {
    fun create(name: String, description: String, type: PlaceType): Place
}