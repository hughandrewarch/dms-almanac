package com.api.weave.api.adapters

import com.api.weave.domain.services.TownService
import com.api.weave.domain.models.Town
import com.api.weave.domain.ports.api.TownRepository
import org.springframework.stereotype.Component

@Component
class DomainTownRepository(private val townDomainService: TownService): TownRepository {

    override fun find(id: Long): Town {
        return townDomainService.find(id)
    }

    override fun findAll(): List<Town> {
        return townDomainService.findAll()
    }
}
