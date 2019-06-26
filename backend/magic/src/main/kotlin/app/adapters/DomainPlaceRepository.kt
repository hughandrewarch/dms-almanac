package app.adapters

import almanac.services.PlaceService
import almanac.models.Place
import almanac.ports.api.PlaceRepository
import org.springframework.stereotype.Component

@Component
class DomainPlaceRepository(private val service: PlaceService): PlaceRepository {

    override fun findAll(settlementId: Long): List<Place> {
        return service.findPlaces(settlementId)
    }
}
