package app.services

import almanac.models.Settlement
import almanac.ports.api.SettlementRepository
import app.models.SettlementCreateRequest
import app.models.SettlementResponse
import app.models.list.ListItem
import app.serializers.ListSerializer
import app.serializers.SettlementResponseSerializer
import org.springframework.stereotype.Component

@Component
class ApiSettlementService(
        private val listSerializer: ListSerializer,
        private val settlementResponseSerializer: SettlementResponseSerializer,
        private val settlementRepository: SettlementRepository) {

    fun find(id: Long): SettlementResponse {
        val settlement = settlementRepository.find(id)

        return settlementResponseSerializer.serialize(settlement)
    }

    fun listAll(): List<ListItem> {
        return listSerializer.settlement(settlementRepository.findAll())
    }

    fun findAll(): List<Settlement> {
        return settlementRepository.findAll()
    }

    fun create(request: SettlementCreateRequest): SettlementResponse {
        val settlement = settlementRepository.create(request.name, request.population, request.description, request.type)

        return settlementResponseSerializer.serialize(settlement)
    }
}
