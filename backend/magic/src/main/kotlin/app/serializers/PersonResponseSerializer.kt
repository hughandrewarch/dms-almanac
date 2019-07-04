package app.serializers

import app.models.PersonResponse
import almanac.models.Person
import org.springframework.stereotype.Component

@Component
class PersonResponseSerializer {
    fun serialize(person: Person): PersonResponse {
        return PersonResponse(person = person)
    }
}