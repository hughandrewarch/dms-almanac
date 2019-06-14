package weave.serializers

import weave.models.SettlementPage
import weave.models.Person
import weave.models.Place
import weave.models.Settlement
import org.springframework.stereotype.Component

@Component
class SettlementPageSerializer(
        val listSerializer: ListSerializer) {
    fun serialize(settlement: Settlement,
                  places: List<Place>,
                  people: List<Person>): SettlementPage {
        return SettlementPage(
                settlement = settlement,
                placeList = listSerializer.place(places),
                personList = listSerializer.person(people)
        )
    }
}