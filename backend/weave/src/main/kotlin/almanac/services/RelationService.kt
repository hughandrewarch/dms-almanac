package almanac.services

import almanac.models.Relation
import almanac.ports.persistence.RelationRepository

class RelationService(private val relationRepository: RelationRepository) {

    fun create(left: Long, right: Long, relationType: Long): Relation {
        return relationRepository.create(left, right, relationType)
    }

    fun findAll(): List<Relation> {
        return relationRepository.findAll()
    }
}