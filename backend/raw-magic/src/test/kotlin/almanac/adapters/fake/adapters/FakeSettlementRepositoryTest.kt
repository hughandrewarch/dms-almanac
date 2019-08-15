package almanac.adapters.fake.adapters

import almanac.adapters.fake.FakeSettlementRepository
import almanac.ports.persistence.SettlementRepository
import almanac.ports.persistence.SettlementRepositoryContractTest

class FakeSettlementRepositoryTest: SettlementRepositoryContractTest() {

    override fun buildSubject(): SettlementRepository {
        return FakeSettlementRepository()
    }
}