package com.api.weave.domain

import com.api.weave.domain.models.Town
import com.api.weave.domain.ports.spi.TownRepository
import org.springframework.stereotype.Component

@Component
class TownService(private val townRepository: TownRepository) {

    fun find(id: Long): Town {
        return townRepository.find(id)
    }

    fun findAll(): List<Town> {
        return townRepository.findAll()
    }
}
