package almanac.adapters.persistence

import almanac.ports.persistence.PlaceRepository
import almanac.ports.persistence.PlaceRepositoryContractTest

class FakePlaceRepositoryTest: PlaceRepositoryContractTest() {

    override fun buildSubject(): PlaceRepository {
        return FakePlaceRepository()
    }
}