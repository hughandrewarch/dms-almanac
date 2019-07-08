package almanac.ports.persistence

import almanac.ports.persistence.base.BaseRepository
import almanac.models.Place
import almanac.models.PlaceType

interface PlaceRepository: BaseRepository<Place> {
    fun create(name: String, description: String, type: PlaceType): Place
    fun createRelation(id: Long, settlementId: Long)
    fun findAll(settlementId: Long): List<Place>
}