package weave.adapters

import weave.services.PlaceService
import weave.models.Place
import weave.ports.api.PlaceRepository
import org.springframework.stereotype.Component

@Component
class DomainPlaceRepository(private val service: PlaceService): PlaceRepository {

    override fun findAll(settlementId: Long): List<Place> {
        return service.findPlaces(settlementId)
    }
}
