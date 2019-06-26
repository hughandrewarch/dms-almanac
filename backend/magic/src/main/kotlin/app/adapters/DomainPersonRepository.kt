package app.adapters

import almanac.services.PersonService
import almanac.models.Person
import almanac.ports.api.PersonRepository
import org.springframework.stereotype.Component

@Component
class DomainPersonRepository(private val service: PersonService): PersonRepository {

    override fun find(id: Long): Person {
        return service.find(id)
    }

    override fun listDenizens(settlementId: Long): List<Person> {
        return service.listDenizens(settlementId)
    }
}
