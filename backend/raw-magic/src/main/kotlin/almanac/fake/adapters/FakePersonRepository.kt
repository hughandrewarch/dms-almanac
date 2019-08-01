package almanac.fake.adapters

import almanac.exceptions.PersonNotFoundException
import almanac.models.Person
import almanac.models.PersonRelation
import almanac.models.PersonRelationType
import almanac.ports.persistence.PersonRepository

class FakePersonRepository : PersonRepository {

    private var people: MutableList<Person> = mutableListOf()
    private var id = 1L

    private var relations: MutableList<PersonRelation> = mutableListOf()

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

    override fun createRelation(personId: Long, relation: PersonRelationType, relationId: Long) {
       relations.add(PersonRelation(personId, relation, relationId))
    }

    override fun findAll(relation: PersonRelationType, relatedId: Long): List<Person> {
        val personIds = relations
                .filter {
                    it.relation == relation && it.relationId == relatedId
                }.map { it.personId }

        return people.filter { personIds.contains(it.id) }
    }

    override fun clear() {}

    fun init() {
        people = allFullPeople
        relations = personListCon.toMutableList()
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

val personListCon = listOf(
        PersonRelation(personId = 1, relation = PersonRelationType.DENIZEN, relationId = 1),
        PersonRelation(personId = 2, relation = PersonRelationType.DENIZEN, relationId = 1),
        PersonRelation(personId = 3, relation = PersonRelationType.DENIZEN, relationId = 2),
        PersonRelation(personId = 4, relation = PersonRelationType.DENIZEN, relationId = 2),
        PersonRelation(personId = 5, relation = PersonRelationType.DENIZEN, relationId = 2),
        PersonRelation(personId = 6, relation = PersonRelationType.DENIZEN, relationId = 3),
        PersonRelation(personId = 7, relation = PersonRelationType.DENIZEN, relationId = 4),
        PersonRelation(personId = 8, relation = PersonRelationType.DENIZEN, relationId = 4),
        PersonRelation(personId = 9, relation = PersonRelationType.MEMBER, relationId = 1),
        PersonRelation(personId = 10, relation = PersonRelationType.OWNER, relationId = 1)
)