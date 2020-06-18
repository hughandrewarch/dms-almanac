package almanac.ports.api

import almanac.models.Person

interface PersonRepository {
    fun create(name: String, race: String, description: String): Person
    fun find(id: Long): Person
    fun findAll(): List<Person>
    fun listDenizens(settlementId: Long): List<Person>
}