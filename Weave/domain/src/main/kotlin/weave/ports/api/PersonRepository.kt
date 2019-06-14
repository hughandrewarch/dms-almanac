package weave.ports.api

import weave.models.Person

interface PersonRepository {
    fun find(id: Long): Person
    fun listDenizens(settlementId: Long): List<Person>
}