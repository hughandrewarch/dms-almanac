package almanac.fake.adapters

import almanac.ports.persistence.SettlementRepository
import almanac.ports.persistence.SettlementRepositoryContractTest

class FakeSettlementRepositoryTest: SettlementRepositoryContractTest() {

    override fun buildSubject(): SettlementRepository {
        return FakeSettlementRepository()
    }
}