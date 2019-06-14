package weave.services

import weave.models.PersonPage
import weave.serializers.PersonPageSerializer
import weave.ports.api.PersonRepository
import org.springframework.stereotype.Component

@Component
class ApiPersonService(
        private val personPageSerializer: PersonPageSerializer,
        private val personRepository: PersonRepository) {

  fun find(id: Long): PersonPage {
        return personPageSerializer.serialize(personRepository.find(id))
    }
}
