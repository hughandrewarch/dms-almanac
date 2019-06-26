package almanac.ports.api

import almanac.models.Place

interface PlaceRepository {
    fun findAll(settlementId: Long): List<Place>
}