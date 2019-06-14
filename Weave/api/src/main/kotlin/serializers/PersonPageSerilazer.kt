package serializers

import models.PersonPage
import models.Person
import org.springframework.stereotype.Component

@Component
class PersonPageSerializer {
    fun serialize(person: Person): PersonPage {
        return PersonPage(person = person)
    }
}