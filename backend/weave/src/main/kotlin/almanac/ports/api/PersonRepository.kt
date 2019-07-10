package almanac.ports.api

import almanac.models.Person
import almanac.models.PersonRelationType

interface PersonRepository {
    fun create(name: String, race: String, description: String): Person
    fun createRelation(id: Long, relationType: PersonRelationType, relatedId: Long)
    fun find(id: Long): Person
    fun listDenizens(settlementId: Long): List<Person>
}