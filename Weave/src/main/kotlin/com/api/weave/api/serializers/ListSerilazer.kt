package com.api.weave.api.serializers

import com.api.weave.api.models.list.ListItem
import com.api.weave.domain.models.Person
import com.api.weave.domain.models.Place
import com.api.weave.domain.models.Settlement
import org.springframework.stereotype.Component

@Component
class ListSerializer {
    fun settlement(listItems: List<Settlement>): List<ListItem> {
        return listItems.map { ListItem(it.id, it.name) }
    }
    fun place(listItems: List<Place>): List<ListItem> {
        return listItems.map { ListItem(it.id, it.name) }
    }
    fun person(listItems: List<Person>): List<ListItem> {
        return listItems.map { ListItem(it.id, it.name) }
    }
}