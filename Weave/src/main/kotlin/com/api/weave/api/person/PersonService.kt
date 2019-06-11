package com.api.weave.api.person

import com.api.weave.models.Person
import org.springframework.stereotype.Component

@Component
class PersonService {

    fun findOne(id: Long): Person {
        return allFullPeople.first { it.id == id }
    }
}

val allFullPeople = listOf(
        Person(id =  1, name = "person a", race = "dwarf", description = "npc a"),
        Person(id =  2, name = "person b", race = "elf", description = "npc b"),
        Person(id =  3, name = "person c", race = "half-elf", description = "npc c"),
        Person(id =  4, name = "person d", race = "tiefling", description = "npc d"),
        Person(id =  5, name = "person e", race = "human", description = "npc e"),
        Person(id =  6, name = "person f", race = "human", description = "npc f"),
        Person(id =  7, name = "person g", race = "dragonborn", description = "npc g"),
        Person(id =  8, name = "person h", race = "dwarf", description = "npc h"),
        Person(id =  9, name = "person i", race = "dwarf", description = "npc i"),
        Person(id = 10, name = "person j", race = "dwarf", description = "npc j")
)