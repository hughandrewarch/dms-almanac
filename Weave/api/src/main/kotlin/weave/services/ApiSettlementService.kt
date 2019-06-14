package weave.services

import weave.models.SettlementPage
import weave.serializers.ListSerializer
import weave.serializers.SettlementPageSerializer
import weave.models.list.ListItem
import org.springframework.stereotype.Component
import weave.ports.api.PlaceRepository
import weave.ports.api.SettlementRepository

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
