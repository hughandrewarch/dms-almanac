package ports.persistence

import ports.persistence.base.BaseRepository
import models.Person
import models.PersonRelationType

interface PersonRepository: BaseRepository<Person> {
    fun findAll(relation: PersonRelationType, relatedId: Long): List<Person>
}