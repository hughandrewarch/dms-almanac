package weave.domain.ports.api

import com.api.weave.domain.models.Person

interface PersonRepository {
    fun find(id: Long): Person
    fun listDenizens(settlementId: Long): List<Person>
}