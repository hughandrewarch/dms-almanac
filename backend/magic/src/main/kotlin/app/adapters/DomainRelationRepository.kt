package app.adapters

import almanac.models.Relation
import almanac.ports.api.RelationRepository
import almanac.services.RelationService
import org.springframework.stereotype.Component

@Component
class DomainRelationRepository(private val service: RelationService): RelationRepository {

    override fun findAll(): List<Relation> {
        return service.findAll()
    }
}
