package weave.api.adapters

import com.api.weave.domain.services.PersonService
import com.api.weave.domain.models.Person
import com.api.weave.domain.ports.api.PersonRepository
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
