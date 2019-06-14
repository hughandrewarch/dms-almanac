package ports.persistence

import ports.persistence.base.BaseRepository
import models.Place

interface PlaceRepository: BaseRepository<Place> {
    fun findAll(settlementId: Long): List<Place>
}