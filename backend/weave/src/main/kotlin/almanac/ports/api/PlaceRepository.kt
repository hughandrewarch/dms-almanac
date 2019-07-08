package almanac.ports.api

import almanac.models.Place
import almanac.models.PlaceType

interface PlaceRepository {
    fun create(name: String, description: String, type: PlaceType): Place
    fun createRelation(id: Long, settlementId: Long)
    fun findAll(settlementId: Long): List<Place>
}