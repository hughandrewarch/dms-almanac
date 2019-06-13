package weave.domain.ports.api

import com.api.weave.domain.models.Settlement

interface SettlementRepository {
    fun find(id: Long): Settlement
    fun findAll(): List<Settlement>
}