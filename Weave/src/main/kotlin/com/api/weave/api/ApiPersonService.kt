package com.api.weave.api

import com.api.weave.api.models.PersonPage
import com.api.weave.api.serializer.PersonPageSerializer
import com.api.weave.domain.ports.api.PersonRepository
import org.springframework.stereotype.Component

@Component
class ApiPersonService(
        private val personPageSerializer: PersonPageSerializer,
        private val personRepository: PersonRepository) {

  fun find(id: Long): PersonPage {
        return personPageSerializer.serialize(personRepository.find(id))
    }
}
