package app.serializers

import app.models.SettlementResponse
import models.Person
import models.Place
import models.Settlement
import org.springframework.stereotype.Component

@Component
class SettlementResponseSerializer(
        val listSerializer: ListSerializer) {
    fun serialize(settlement: Settlement,
                  places: List<Place>,
                  people: List<Person>): SettlementResponse {
        return SettlementResponse(
                settlement = settlement,
                placeList = listSerializer.place(places),
                personList = listSerializer.person(people)
        )
    }
}