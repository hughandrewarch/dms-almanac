package weave.ports.persistence

import weave.ports.persistence.base.BaseRepository
import weave.models.Place

interface PlaceRepository: BaseRepository<Place> {
    fun findAll(settlementId: Long): List<Place>
}