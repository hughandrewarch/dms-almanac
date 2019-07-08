package app.adapters

import almanac.services.PlaceService
import almanac.models.Place
import almanac.models.PlaceType
import almanac.ports.api.PlaceRepository
import org.springframework.stereotype.Component

@Component
class DomainPlaceRepository(private val service: PlaceService): PlaceRepository {
    override fun create(name: String, description: String, type: PlaceType): Place {
        return service.create(name, description, type)
    }

    override fun findAll(settlementId: Long): List<Place> {
        return service.findPlaces(settlementId)
    }

    override fun createRelation(id: Long, settlementId: Long) {
        service.createRelation(id, settlementId)
    }
}
