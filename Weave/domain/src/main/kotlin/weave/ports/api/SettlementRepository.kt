package weave.ports.api

import weave.models.Settlement

interface SettlementRepository {
    fun find(id: Long): Settlement
    fun findAll(): List<Settlement>
}