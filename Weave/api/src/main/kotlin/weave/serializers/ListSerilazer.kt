package weave.serializers

import weave.models.list.ListItem
import weave.models.Person
import weave.models.Place
import weave.models.Settlement
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