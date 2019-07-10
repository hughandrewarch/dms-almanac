package app.adapters

import almanac.services.SettlementService
import almanac.models.Settlement
import almanac.models.SettlementType
import almanac.ports.api.SettlementRepository
import org.springframework.stereotype.Component

@Component
class DomainSettlementRepository(private val service: SettlementService): SettlementRepository {
    override fun create(name: String, population: Long, description: String, type: SettlementType): Settlement {
        return service.create(name, population, description, type)
    }

    override fun find(id: Long): Settlement {
        return service.find(id)
    }

    override fun findAll(): List<Settlement> {
        return service.findAll()
    }
}
