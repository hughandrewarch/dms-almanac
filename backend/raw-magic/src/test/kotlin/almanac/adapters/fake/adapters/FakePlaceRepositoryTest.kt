package almanac.adapters.fake.adapters

import almanac.adapters.fake.FakePlaceRepository
import almanac.adapters.fake.FakeSettlementRepository
import almanac.ports.persistence.PlaceRepository
import almanac.ports.persistence.PlaceRepositoryContractTest
import almanac.ports.persistence.SettlementRepository

class FakePlaceRepositoryTest: PlaceRepositoryContractTest() {

    override fun buildSubject(): PlaceRepository {
        return FakePlaceRepository()
    }

    override fun buildSettlementRepository(): SettlementRepository {
        return FakeSettlementRepository()
    }
}
