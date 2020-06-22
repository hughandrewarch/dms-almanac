package almanac.services

import almanac.models.Relation
import almanac.ports.persistence.RelationRepository
import almanac.ports.persistence.RelationTypeRepository

class RelationService(private val relationRepository: RelationRepository,
                      private val relationTypeRepository: RelationTypeRepository) {

    fun create(left: Long, right: Long, relationType: Long): Relation {
        return relationRepository.create(left, right, relationType)
    }

    fun findAll(): List<Relation> {
        return relationRepository.findAll()
    }

    fun linkSettlementPerson(settlementId: Long, personId: Long): Relation {
        val relationType = relationTypeRepository.findByName("SETTLEMENT_PERSON")
        return relationRepository.create(settlementId, personId, relationType.id)
    }
}