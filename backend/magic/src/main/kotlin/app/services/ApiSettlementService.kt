package app.services

import app.models.SettlementResponse
import app.serializers.ListSerializer
import app.serializers.SettlementResponseSerializer
import app.models.list.ListItem
import org.springframework.stereotype.Component
import ports.api.PlaceRepository
import ports.api.SettlementRepository
import services.PersonService

@Component
class ApiSettlementService(
        private val listSerializer: ListSerializer,
        private val settlementResponseSerializer: SettlementResponseSerializer,
        private val settlementRepository: SettlementRepository,
        private val placeRepository: PlaceRepository,
        private val personService: PersonService) {

  fun find(id: Long): SettlementResponse {
        val settlement = settlementRepository.find(id)
        val placeList = placeRepository.findAll(settlement.id)
        val personList = personService.listDenizens(settlement.id)

        return settlementResponseSerializer.serialize(settlement, placeList, personList)
    }

    fun findAll(): List<ListItem> {
        return listSerializer.settlement(settlementRepository.findAll())
    }
}
