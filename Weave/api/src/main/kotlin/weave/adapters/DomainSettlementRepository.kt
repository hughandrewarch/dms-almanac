package weave.api.adapters

import com.api.weave.domain.services.SettlementService
import com.api.weave.domain.models.Settlement
import com.api.weave.domain.ports.api.SettlementRepository
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
