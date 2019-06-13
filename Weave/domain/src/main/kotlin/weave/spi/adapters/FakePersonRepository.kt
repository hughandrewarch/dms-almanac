package weave.spi.adapters

import com.api.weave.domain.ports.spi.PersonRepository
import com.api.weave.domain.models.Person
import com.api.weave.domain.models.PersonRelation
import com.api.weave.domain.models.PersonRelationType
import org.springframework.stereotype.Component

@Component
class FakePersonRepository : PersonRepository {
    override fun find(id: Long): Person {
        return allFullPeople.first { it.id == id }
    }

    override fun findAll(): List<Person> {
        return allFullPeople
    }

    override fun findAll(relation: PersonRelationType, relatedId: Long): List<Person> {
        val personIds = personListCon
                .filter {
                    it.relation == relation && it.relatedId == relatedId
                }.map { it.id }

        return allFullPeople.filter { personIds.contains(it.id) }
    }
}

val allFullPeople = listOf(
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