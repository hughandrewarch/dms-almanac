package com.api.weave.domain.services

import com.api.weave.domain.models.Settlement
import com.api.weave.domain.ports.spi.SettlementRepository
import org.springframework.stereotype.Component

class SettlementService(private val settlementRepository: SettlementRepository) {

    fun find(id: Long): Settlement {
        return settlementRepository.find(id)
    }

    fun findAll(): List<Settlement> {
        return settlementRepository.findAll()
    }
}
