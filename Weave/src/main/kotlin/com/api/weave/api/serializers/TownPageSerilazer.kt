package com.api.weave.api.serializers

import com.api.weave.api.models.SettlementPage
import com.api.weave.domain.models.Person
import com.api.weave.domain.models.Place
import com.api.weave.domain.models.Settlement
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