package app.services

import app.models.SettlementPage
import app.serializers.ListSerializer
import app.serializers.SettlementPageSerializer
import app.models.list.ListItem
import org.springframework.stereotype.Component
import ports.api.PlaceRepository
import ports.api.SettlementRepository
import services.PersonService

@Component
class ApiSettlementService(
        private val listSerializer: ListSerializer,
        private val settlementPageSerializer: SettlementPageSerializer,
        private val settlementRepository: SettlementRepository,
        private val placeRepository: PlaceRepository,
        private val personService: PersonService) {

  fun find(id: Long): SettlementPage {
        val settlement = settlementRepository.find(id)
        val placeList = placeRepository.findAll(settlement.id)
        val personList = personService.listDenizens(settlement.id)

        return settlementPageSerializer.serialize(settlement, placeList, personList)
    }

    fun findAll(): List<ListItem> {
        return listSerializer.settlement(settlementRepository.findAll())
    }
}
