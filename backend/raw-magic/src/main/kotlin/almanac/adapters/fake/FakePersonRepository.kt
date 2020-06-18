package almanac.adapters.fake

import almanac.exceptions.PersonNotFoundException
import almanac.models.Person
import almanac.ports.persistence.PersonRepository

class FakePersonRepository : PersonRepository {

    private var people: MutableList<Person> = mutableListOf()
    private var id = 1L

    override fun find(id: Long): Person {
        return people.firstOrNull { it.id == id } ?: throw PersonNotFoundException(id)
    }

    override fun findAll(): List<Person> {
        return people
    }

    override fun create(name: String, race: String, description: String): Person {
        val person = Person(id++, name, race, description)
        people.add(person)
        return person
    }

    fun init() {
        people = allFullPeople
    }
}

val allFullPeople = mutableListOf(
        Person(id = 1, name = "controllers a", race = "dwarf", description = "npc a"),
        Person(id = 2, name = "controllers b", race = "elf", description = "npc b"),
        Person(id = 3, name = "controllers c", race = "half-elf", description = "npc c"),
        Person(id = 4, name = "controllers d", race = "tiefling", description = "npc d"),
        Person(id = 5, name = "controllers e", race = "human", description = "npc e"),
        Person(id = 6, name = "controllers f", race = "human", description = "npc f"),
        Person(id = 7, name = "controllers g", race = "dragonborn", description = "npc g"),
        Person(id = 8, name = "controllers h", race = "dwarf", description = "npc h"),
        Person(id = 9, name = "controllers i", race = "dwarf", description = "npc i"),
        Person(id = 10, name = "controllers j", race = "dwarf", description = "npc j")
)
