package app.adapters

import almanac.services.SettlementService
import almanac.models.Settlement
import almanac.ports.api.SettlementRepository
import org.springframework.stereotype.Component

@Component
class DomainSettlementRepository(private val service: SettlementService): SettlementRepository {

    override fun find(id: Long): Settlement {
        return service.find(id)
    }

    override fun findAll(): List<Settlement> {
        return service.findAll()
    }
}
