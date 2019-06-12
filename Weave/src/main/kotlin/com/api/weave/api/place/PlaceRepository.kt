package com.api.weave.api.place

import com.api.weave.api.base.BaseRepository
import com.api.weave.models.Place
import com.api.weave.models.list.ListItem

interface PlaceRepository: BaseRepository<Place> {
    fun findAll(settlementId: Long): List<Place>
}