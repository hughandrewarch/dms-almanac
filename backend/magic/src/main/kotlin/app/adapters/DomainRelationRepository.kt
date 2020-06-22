package app.adapters

import almanac.models.Relation
import almanac.ports.api.RelationRepository
import almanac.services.RelationService
import org.springframework.stereotype.Component

//TODO is this layer unneeded?
@Component
class DomainRelationRepository(private val service: RelationService): RelationRepository {

    override fun findAll(): List<Relation> {
        return service.findAll()
    }

    override fun linkSettlementPerson(settlementId: Long, personId: Long): Relation {
        return service.linkSettlementPerson(settlementId, personId)
    }
}
