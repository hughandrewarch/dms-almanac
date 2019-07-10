package almanac.services

import almanac.models.Settlement
import almanac.models.SettlementType
import almanac.ports.persistence.SettlementRepository

class SettlementService(private val settlementRepository: SettlementRepository) {

    fun create(name: String, population: Long, description: String, type: SettlementType): Settlement {
        return settlementRepository.create(name, population, description, type)
    }

    fun find(id: Long): Settlement {
        return settlementRepository.find(id)
    }

    fun findAll(): List<Settlement> {
        return settlementRepository.findAll()
    }
}
