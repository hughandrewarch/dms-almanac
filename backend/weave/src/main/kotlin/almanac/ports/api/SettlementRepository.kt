package almanac.ports.api

import almanac.models.Settlement
import almanac.models.SettlementType

interface SettlementRepository {
    fun create(name: String, population: Long, description: String, type: SettlementType): Settlement
    fun find(id: Long): Settlement
    fun findAll(): List<Settlement>
}