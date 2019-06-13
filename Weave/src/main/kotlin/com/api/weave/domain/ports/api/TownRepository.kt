package com.api.weave.domain.ports.api

import com.api.weave.domain.models.Town

interface TownRepository {
    fun find(id: Long): Town
    fun findAll(): List<Town>
}