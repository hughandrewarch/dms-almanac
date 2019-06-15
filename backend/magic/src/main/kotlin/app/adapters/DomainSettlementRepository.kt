package app.adapters

import services.SettlementService
import models.Settlement
import ports.api.SettlementRepository
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
