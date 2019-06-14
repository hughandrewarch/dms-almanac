package ports.api

import models.Person

interface PersonRepository {
    fun find(id: Long): Person
    fun listDenizens(settlementId: Long): List<Person>
}