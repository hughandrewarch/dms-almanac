package com.api.weave.domain.ports.spi

import com.api.weave.domain.ports.spi.base.BaseRepository
import com.api.weave.domain.models.Place

interface PlaceRepository: BaseRepository<Place> {
    fun findAll(settlementId: Long): List<Place>
}