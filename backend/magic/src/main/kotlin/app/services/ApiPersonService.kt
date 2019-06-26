package app.services

import app.models.PersonResponse
import app.serializers.PersonResponseSerializer
import almanac.ports.api.PersonRepository
import org.springframework.stereotype.Component

@Component
class ApiPersonService(
        private val personResponseSerializer: PersonResponseSerializer,
        private val personRepository: PersonRepository) {

  fun find(id: Long): PersonResponse {
        return personResponseSerializer.serialize(personRepository.find(id))
    }
}
