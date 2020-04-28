package almanac.services

import almanac.models.Relation
import almanac.ports.persistence.RelationRepository

class RelationService(private val relationRepository: RelationRepository) {

    fun findAll(): List<Relation> {
        return relationRepository.findAll()
    }
}