package weave.domain.ports.api

import com.api.weave.domain.models.Place

interface PlaceRepository {
    fun findAll(settlementId: Long): List<Place>
}