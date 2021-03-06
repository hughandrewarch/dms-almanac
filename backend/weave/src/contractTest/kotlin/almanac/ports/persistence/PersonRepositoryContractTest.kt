package almanac.ports.persistence

import almanac.exceptions.PersonNotFoundException
import almanac.models.Person
import org.assertj.core.api.Assertions
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

abstract class PersonRepositoryContractTest {
    private lateinit var subject: PersonRepository

    @BeforeEach
    fun setUp() {
        subject = buildSubject()
    }

    abstract fun buildSubject(): PersonRepository

    @Test
    fun create() {
        val createdPerson = subject.create("Lester", "Human", "Dresses as a Rabbit")

        assertThat(createdPerson)
                .isEqualToIgnoringGivenFields(
                        Person(
                                -1,
                                "Lester",
                                "Human",
                                "Dresses as a Rabbit")
                , "id")
    }

    @Test
    fun find() {
        val createdPerson = subject.create("Lester", "Human", "Dresses as a Rabbit")

        val person = subject.find(createdPerson.id)

        assertThat(person).isEqualTo(
                Person(createdPerson.id, "Lester", "Human", "Dresses as a Rabbit")
        )
    }

    @Test
    fun `find throws exception when no person found`() {

        Assertions.assertThatThrownBy {
            subject.find(-1L)
        }
                .isInstanceOf(PersonNotFoundException::class.java)
                .hasMessageContaining("<-1>")
    }

    @Test
    fun findAll() {
        val person1 = subject.create("Lester", "Human", "Dresses as a Rabbit")
        val person2 = subject.create("Lombeau", "Human", "Wandering fancyman")

        val people = subject.findAll()

        assertThat(people).containsExactlyInAnyOrder(
                Person(person1.id, "Lester", "Human", "Dresses as a Rabbit"),
                Person(person2.id, "Lombeau", "Human", "Wandering fancyman")
        )
    }
}
