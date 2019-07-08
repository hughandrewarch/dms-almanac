package app.adapters

import almanac.adapters.FakePlaceRepository
import almanac.ports.api.PlaceRepository
import almanac.ports.api.PlaceRepositoryContractTest
import almanac.services.PlaceService

class DomainPlaceRepositoryTest: PlaceRepositoryContractTest() {

    override fun buildSubject(): PlaceRepository {
        val placeService = PlaceService(FakePlaceRepository())
        return DomainPlaceRepository(placeService)
    }
}