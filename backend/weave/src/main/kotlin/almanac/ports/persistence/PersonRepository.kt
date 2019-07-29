package almanac.ports.persistence

import almanac.ports.persistence.base.BaseRepository
import almanac.models.Person
import almanac.models.PersonRelationType

interface PersonRepository: BaseRepository<Person> {
    fun create(name: String, race: String, description: String): Person
    fun createRelation(id: Long, relation: PersonRelationType, relationId: Long)
    fun findAll(relation: PersonRelationType, relatedId: Long): List<Person>

    //TODO remove
    fun clear()
}