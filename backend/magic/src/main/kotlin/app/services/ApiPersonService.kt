package app.services

import almanac.ports.api.PersonRepository
import app.models.PersonResponse
import app.serializers.PersonResponseSerializer
import org.springframework.stereotype.Component

@Component
class ApiPersonService(
        private val personResponseSerializer: PersonResponseSerializer,
        private val personRepository: PersonRepository) {

    fun find(id: Long): PersonResponse {
        return personResponseSerializer.serialize(personRepository.find(id))
    }
}
