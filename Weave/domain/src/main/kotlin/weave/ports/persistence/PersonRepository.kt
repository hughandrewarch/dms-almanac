package weave.ports.persistence

import weave.ports.persistence.base.BaseRepository
import weave.models.Person
import weave.models.PersonRelationType

interface PersonRepository: BaseRepository<Person> {
    fun findAll(relation: PersonRelationType, relatedId: Long): List<Person>
}