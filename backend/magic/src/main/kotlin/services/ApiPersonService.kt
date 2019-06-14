package services

import models.PersonPage
import serializers.PersonPageSerializer
import ports.api.PersonRepository
import org.springframework.stereotype.Component

@Component
class ApiPersonService(
        private val personPageSerializer: PersonPageSerializer,
        private val personRepository: PersonRepository) {

  fun find(id: Long): PersonPage {
        return personPageSerializer.serialize(personRepository.find(id))
    }
}
