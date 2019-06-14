package weave.ports.api

import weave.models.Place

interface PlaceRepository {
    fun findAll(settlementId: Long): List<Place>
}