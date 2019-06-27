package almanac.adapters.persistence

import almanac.ports.persistence.SettlementRepositoryContractTest
import almanac.ports.persistence.SettlementRepository

class FakeSettlementRepositoryTest: SettlementRepositoryContractTest() {

    override fun buildSubject(): SettlementRepository {
        return FakeSettlementRepository()
    }
}