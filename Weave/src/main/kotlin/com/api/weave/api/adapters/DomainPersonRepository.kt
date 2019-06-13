package com.api.weave.api.adapters

import com.api.weave.domain.services.PersonService
import com.api.weave.domain.models.Person
import com.api.weave.domain.ports.api.PersonRepository
import org.springframework.stereotype.Component

@Component
class DomainPersonRepository(private val personDomainService: PersonService): PersonRepository {

    override fun find(id: Long): Person {
        return personDomainService.find(id)
    }

    override fun listDenizens(settlementId: Long): List<Person> {
        return personDomainService.listDenizens(settlementId)
    }
}
