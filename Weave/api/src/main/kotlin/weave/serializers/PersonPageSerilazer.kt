package weave.serializers

import weave.models.PersonPage
import weave.models.Person
import org.springframework.stereotype.Component

@Component
class PersonPageSerializer {
    fun serialize(person: Person): PersonPage {
        return PersonPage(person = person)
    }
}