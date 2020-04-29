package app.adapters

import almanac.models.RelationType
import almanac.ports.api.RelationTypeRepository
import almanac.services.RelationTypeService
import org.springframework.stereotype.Component

@Component
class DomainRelationTypeRepository(private val service: RelationTypeService): RelationTypeRepository {

    override fun findAll(): List<RelationType> {
        return service.findAll()
    }
}
