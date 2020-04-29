package app.services

import almanac.ports.api.PersonRepository
import app.models.PersonCreateRequest
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

    fun create(request: PersonCreateRequest): PersonResponse {
        val person = personRepository.create(request.name, request.race, request.description)

        return personResponseSerializer.serialize(person)
    }

//    fun create(request: SettlementCreateRequest): SettlementResponse {
//        val settlement = settlementRepository.create(request.name, request.population, request.description, request.type)
//
//        return settlementResponseSerializer.serialize(settlement, emptyList(), emptyList())
//    }
}
