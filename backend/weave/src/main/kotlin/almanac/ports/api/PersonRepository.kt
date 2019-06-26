package almanac.ports.api

import almanac.models.Person

interface PersonRepository {
    fun find(id: Long): Person
    fun listDenizens(settlementId: Long): List<Person>
}