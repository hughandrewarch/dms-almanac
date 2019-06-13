package weave.api.serializers

import com.api.weave.api.models.PersonPage
import com.api.weave.domain.models.Person
import org.springframework.stereotype.Component

@Component
class PersonPageSerializer {
    fun serialize(person: Person): PersonPage {
        return PersonPage(person = person)
    }
}