package weave.adapters

import weave.services.PersonService
import weave.models.Person
import weave.ports.api.PersonRepository
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
