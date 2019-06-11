package com.api.weave.api.town

import com.api.weave.models.Town

interface TownRepository {
    fun find(id: Long): Town
    fun findAll(): List<Town>
}