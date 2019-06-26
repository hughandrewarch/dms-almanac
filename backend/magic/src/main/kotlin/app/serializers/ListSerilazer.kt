package app.serializers

import app.models.list.ListItem
import almanac.models.Person
import almanac.models.Place
import almanac.models.Settlement
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