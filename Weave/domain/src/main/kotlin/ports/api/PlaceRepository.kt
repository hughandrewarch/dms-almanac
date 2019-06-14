package ports.api

import models.Place

interface PlaceRepository {
    fun findAll(settlementId: Long): List<Place>
}