package com.api.weave.api.person

import com.api.weave.models.Person
import com.api.weave.models.PersonRelation
import com.api.weave.models.PersonRelationType
import com.api.weave.models.PersonPage
import com.api.weave.models.list.ListItem
import org.springframework.stereotype.Component

@Component
class PersonService {

    fun findOne(id: Long): PersonPage {
        return PersonPage(
                person = allFullPeople.first { it.id == id }
        )
    }

    fun listPeople(): List<ListItem> {
        return allFullPeople.map { ListItem(it.id, it.name) }
    }

    fun listDenizens(relatedId: Long): List<ListItem> {
        return listPeople(PersonRelationType.DENIZEN, relatedId)
    }

    private fun listPeople(relation: PersonRelationType, relatedId: Long): List<ListItem> {
        val personIds = personListCon
                .filter {
                    it.relation == relation && it.relatedId == relatedId
                }.map { it.id }

        return allFullPeople
                .filter { personIds.contains(it.id) }
                .map { ListItem(it.id, it.name) }
    }
}

val allFullPeople = listOf(
        Person(id = 1, name = "person a", race = "dwarf", description = "npc a"),
        Person(id = 2, name = "person b", race = "elf", description = "npc b"),
        Person(id = 3, name = "person c", race = "half-elf", description = "npc c"),
        Person(id = 4, name = "person d", race = "tiefling", description = "npc d"),
        Person(id = 5, name = "person e", race = "human", description = "npc e"),
        Person(id = 6, name = "person f", race = "human", description = "npc f"),
        Person(id = 7, name = "person g", race = "dragonborn", description = "npc g"),
        Person(id = 8, name = "person h", race = "dwarf", description = "npc h"),
        Person(id = 9, name = "person i", race = "dwarf", description = "npc i"),
        Person(id = 10, name = "person j", race = "dwarf", description = "npc j")
)

val personListCon = listOf(
        PersonRelation(id = 1, relation = PersonRelationType.DENIZEN, relatedId = 1),
        PersonRelation(id = 2, relation = PersonRelationType.DENIZEN, relatedId = 1),
        PersonRelation(id = 3, relation = PersonRelationType.DENIZEN, relatedId = 2),
        PersonRelation(id = 4, relation = PersonRelationType.DENIZEN, relatedId = 2),
        PersonRelation(id = 5, relation = PersonRelationType.DENIZEN, relatedId = 2),
        PersonRelation(id = 6, relation = PersonRelationType.DENIZEN, relatedId = 3),
        PersonRelation(id = 7, relation = PersonRelationType.DENIZEN, relatedId = 4),
        PersonRelation(id = 8, relation = PersonRelationType.DENIZEN, relatedId = 4),
        PersonRelation(id = 9, relation = PersonRelationType.MEMBER, relatedId = 1),
        PersonRelation(id = 10, relation = PersonRelationType.OWNER, relatedId = 1)
)