package com.api.weave.api.person

import com.api.weave.api.base.BaseRepository
import com.api.weave.models.Person
import com.api.weave.models.PersonRelationType

interface PersonRepository: BaseRepository<Person> {
    fun findAll(relation: PersonRelationType, relatedId: Long): List<Person>
}