package com.api.weave.api.person

import com.api.weave.models.*
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class PersonController {

    //TODO extract Person service to prep for db
    @GetMapping("/person/{id}")
    fun towns(@PathVariable id: Long): PersonPage {
        val person = allFullPeople.first { it.id == id }

        val personPage = PersonPage(
            person = person
        )
        return personPage
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