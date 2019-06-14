package services

import models.SettlementPage
import serializers.ListSerializer
import serializers.SettlementPageSerializer
import models.list.ListItem
import org.springframework.stereotype.Component
import ports.api.PlaceRepository
import ports.api.SettlementRepository

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
