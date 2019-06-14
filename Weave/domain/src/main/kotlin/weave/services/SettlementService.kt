package weave.services

import weave.models.Settlement
import weave.ports.persistence.SettlementRepository

class SettlementService(private val settlementRepository: SettlementRepository) {

    fun find(id: Long): Settlement {
        return settlementRepository.find(id)
    }

    fun findAll(): List<Settlement> {
        return settlementRepository.findAll()
    }
}
