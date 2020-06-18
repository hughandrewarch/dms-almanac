package almanac.ports.persistence

import almanac.ports.persistence.base.BaseRepository
import almanac.models.Person

interface PersonRepository: BaseRepository<Person> {
    fun create(name: String, race: String, description: String): Person
}