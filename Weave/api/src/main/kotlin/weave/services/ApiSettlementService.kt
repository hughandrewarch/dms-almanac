package weave.api.services

import com.api.weave.api.models.SettlementPage
import com.api.weave.api.serializers.ListSerializer
import com.api.weave.api.serializers.SettlementPageSerializer
import com.api.weave.domain.services.PersonService
import com.api.weave.api.models.list.ListItem
import com.api.weave.domain.ports.api.PlaceRepository
import com.api.weave.domain.ports.api.SettlementRepository
import org.springframework.stereotype.Component

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
