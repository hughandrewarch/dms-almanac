package almanac.ports.api

import almanac.exceptions.PersonNotFoundException
import almanac.models.Person
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
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

    @Test
    fun `find returns a found person`() {
        val created = subject.create("Lombeau", "Human", "Wandering fancyman")

        val person = subject.find(created.id)

        assertThat(created).isEqualTo(person)
    }

    @Test
    fun `find throws an exception when no person found`() {

        assertThatThrownBy {
            subject.find(-1)
        }
                .isInstanceOf(PersonNotFoundException::class.java)
                .hasMessageContaining("<-1>")
    }
}
