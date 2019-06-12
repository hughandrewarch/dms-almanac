package com.api.weave.api.person

import com.api.weave.models.Person
import com.api.weave.models.PersonRelationType

interface PersonRepository {
    fun find(id: Long): Person
    fun findAll(): List<Person>
    fun findAll(relation: PersonRelationType, relatedId: Long): List<Person>
}