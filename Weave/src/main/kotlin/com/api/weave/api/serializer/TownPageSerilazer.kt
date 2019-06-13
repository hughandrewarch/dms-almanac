package com.api.weave.api.serializer

import com.api.weave.api.models.TownPage
import com.api.weave.domain.models.Person
import com.api.weave.domain.models.Place
import com.api.weave.domain.models.Town
import org.springframework.stereotype.Component

@Component
class TownPageSerializer(
        val listSerializer: ListSerializer) {
    fun serialize(town: Town,
                  places: List<Place>,
                  people: List<Person>): TownPage {
        return TownPage(
                town = town,
                placeList = listSerializer.place(places),
                personList = listSerializer.person(people)
        )
    }
}