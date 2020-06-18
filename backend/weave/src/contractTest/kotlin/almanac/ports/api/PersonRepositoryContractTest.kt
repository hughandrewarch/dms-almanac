package almanac.ports.api

import almanac.exceptions.PersonNotFoundException
import almanac.models.Person
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test

abstract class PersonRepositoryContractTest {
    private lateinit var subject: PersonRepository

    @BeforeEach
    fun setUp() {
        subject = buildSubject()
    }

    abstract fun buildSubject(): PersonRepository

    @Test
    fun `create returns a created person`() {
        val created = subject.create("Lombeau", "Human", "Wandering fancyman")

        assertThat(created)
                .isEqualToIgnoringGivenFields(
                        Person(-1,
                                "Lombeau",
                                "Human",
                                "Wandering fancyman"),
                        "id")
    }

    @Nested
    inner class find() {

        @Test
        fun `it should throw an exception when no person found`() {

            assertThatThrownBy {
                subject.find(-1)
            }
                    .isInstanceOf(PersonNotFoundException::class.java)
                    .hasMessageContaining("<-1>")
        }

        @Test
        fun `it should return a found person`() {
            val created = subject.create("Lombeau", "Human", "Wandering fancyman")

            val person = subject.find(created.id)

            assertThat(created).isEqualTo(person)
        }
    }

    @Nested
    inner class findAll() {

        private lateinit var person1: Person
        private lateinit var person2: Person
        private lateinit var person3: Person

        @BeforeEach
        fun setup() {
            person1 = subject.create("Lombeau", "Human", "Wandering fancyman")
            person2 = subject.create("Lester", "Human", "Dresses as a Rabbit")
            person3 = subject.create("Rita", "Tiefling", "Guild Steward")
        }

        @Test
        fun `it should return all people`() {
            val people = subject.findAll()

            assertThat(people).containsExactlyInAnyOrder(
                person1, person2, person3
            )
        }

        @Test
        fun `it should return empty if no denizens found`() {
            val people = subject.listDenizens(-1)

            assertThat(people).isEmpty()
        }
    }
}
