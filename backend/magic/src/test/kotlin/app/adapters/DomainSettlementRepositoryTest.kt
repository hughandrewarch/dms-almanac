package app.adapters

import almanac.adapters.fake.FakeSettlementRepository
import almanac.ports.api.SettlementRepository
import almanac.ports.api.SettlementRepositoryContractTest
import almanac.services.SettlementService

class DomainSettlementRepositoryTest: SettlementRepositoryContractTest() {

    override fun buildSubject(): SettlementRepository {
        val settlementService = SettlementService(FakeSettlementRepository())
        return DomainSettlementRepository(settlementService)
    }
}