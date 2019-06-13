package com.api.weave.domain

import com.api.weave.domain.models.Person
import com.api.weave.domain.ports.spi.PersonRepository
import com.api.weave.domain.models.PersonRelationType
import org.springframework.stereotype.Component

@Component
class PersonService(private val personRepository: PersonRepository) {

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