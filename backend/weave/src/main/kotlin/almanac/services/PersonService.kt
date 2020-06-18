package almanac.services

import almanac.models.Person
import almanac.ports.persistence.PersonRepository

//TODO: Move out to own module?
//api -- service -- persistence
//         |
//       domain
class PersonService(private val personRepository: PersonRepository) {

    fun create(name: String, race: String, description: String): Person {
        return personRepository.create(name, race, description)
    }

    fun find(id: Long): Person {
        return personRepository.find(id)
    }

    fun findAll(): List<Person> {
        return personRepository.findAll()
    }

    fun listDenizens(relatedId: Long): List<Person> {
        return emptyList()//listPeople(PersonRelationType.DENIZEN, relatedId)
    }
}