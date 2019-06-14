package ports.api

import models.Settlement

interface SettlementRepository {
    fun find(id: Long): Settlement
    fun findAll(): List<Settlement>
}