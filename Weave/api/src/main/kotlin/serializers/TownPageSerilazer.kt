package serializers

import models.SettlementPage
import models.Person
import models.Place
import models.Settlement
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