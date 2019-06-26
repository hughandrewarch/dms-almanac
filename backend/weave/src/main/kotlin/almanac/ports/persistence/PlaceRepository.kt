package almanac.ports.persistence

import almanac.ports.persistence.base.BaseRepository
import almanac.models.Place

interface PlaceRepository: BaseRepository<Place> {
    fun findAll(settlementId: Long): List<Place>
}