package serializers

import models.list.ListItem
import models.Person
import models.Place
import models.Settlement
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