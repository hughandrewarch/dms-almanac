package almanac.ports.api

import almanac.models.Settlement

interface SettlementRepository {
    fun find(id: Long): Settlement
    fun findAll(): List<Settlement>
}