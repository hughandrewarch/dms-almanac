package almanac.services

import almanac.models.Person
import almanac.ports.persistence.PersonRepository
import almanac.models.PersonRelationType

class PersonService(private val personRepository: PersonRepository) {

    fun create(name: String, race: String, description: String): Person {
        return personRepository.create(name, race, description)
    }

    fun createRelation(id: Long, relation: PersonRelationType, relationId: Long) {
        personRepository.createRelation(id, relation, relationId)
    }

    fun find(id: Long): Person {
        return personRepository.find(id)
    }

    fun listDenizens(relatedId: Long): List<Person> {
        return listPeople(PersonRelationType.DENIZEN, relatedId)
    }

    private fun listPeople(relation: PersonRelationType, relatedId: Long): List<Person> {
        return personRepository.findAll(relation, relatedId)
    }
}