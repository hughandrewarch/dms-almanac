package weave.adapters

import weave.services.SettlementService
import weave.models.Settlement
import weave.ports.api.SettlementRepository
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
