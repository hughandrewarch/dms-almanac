package com.api.weave.api.person

import com.api.weave.models.PersonPage
import com.api.weave.models.PersonRelationType
import com.api.weave.models.list.ListItem
import org.springframework.stereotype.Component

@Component
class PersonService(private val personRepository: PersonRepository) {

    fun findOne(id: Long): PersonPage {
        val person = personRepository.find(id)
        return PersonPage(
                person = person
        )
    }

    fun listPeople(): List<ListItem> {
        val people = personRepository.findAll()
        return people.map { ListItem(it.id, it.name) }
    }

    fun listDenizens(relatedId: Long): List<ListItem> {
        return listPeople(PersonRelationType.DENIZEN, relatedId)
    }

    private fun listPeople(relation: PersonRelationType, relatedId: Long): List<ListItem> {
        return personRepository.findAll(relation, relatedId)
                .map { ListItem(it.id, it.name) }
    }
}