package almanac.ports.persistence

import almanac.exceptions.StatBlockExistsException
import almanac.exceptions.StatBlockNotFoundException
import almanac.models.Ability
import almanac.models.Person
import almanac.models.StatBlock
import almanac.utils.AbilityScore
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test

abstract class StatBlockRepositoryContractTest {
    private lateinit var subject: StatBlockRepository
    private lateinit var personRepository: PersonRepository

    private lateinit var person: Person

    @BeforeEach
    fun setUp() {
        subject = buildSubject()
        personRepository = buildPersonRepository()

        subject.clear()

        person = personRepository.create("Lombeau", "Human", "Wandering fancyman")
    }

    abstract fun buildSubject(): StatBlockRepository
    abstract fun buildPersonRepository(): PersonRepository

    @Nested
    inner class create() {
        @Test
        fun `create should return a created statblock with default values`() {
            val created = subject.create(person.id)

            assertThat(created).isEqualTo(
                    StatBlock(person.id, AbilityScore.of(10, 10, 10, 10, 10, 10))
            )
        }

        @Test
        fun `create should return a created statblock with set values`() {
            val created = subject.create(person.id, str = 12, int = 8, wis = 18, cha = 16)

            assertThat(created).isEqualTo(
                    StatBlock(person.id,
                            AbilityScore.of(12, 10, 10, 8, 18, 16))
            )

        }

        @Test
        fun `create should throw a statblock exists exception when a stat block already exists for that person`() {
            subject.create(person.id)

            assertThatThrownBy {
                subject.create(person.id)
            }
                    .isInstanceOf(StatBlockExistsException::class.java)
                    .hasMessageContaining("<${person.id}>")
        }
    }

    @Nested
    inner class find() {

        @Test
        fun `find throws exception when no statblock found`() {

            assertThatThrownBy {
                subject.find(-1L)
            }
                    .isInstanceOf(StatBlockNotFoundException::class.java)
                    .hasMessageContaining("<-1>")
        }

        @Test
        fun `create should return a create a findable statblock with default values`() {
            subject.create(person.id)

            val statBlock = subject.find(person.id)

            assertThat(statBlock).isEqualTo(
                    StatBlock(person.id, AbilityScore.of(10, 10, 10, 10, 10, 10))
            )
        }

        @Test
        fun `create should create a findable statblock with set values`() {
            subject.create(person.id, str = 12, int = 8, wis = 18, cha = 16)

            val statBlock = subject.find(person.id)

            assertThat(statBlock).isEqualTo(
                    StatBlock(person.id,
                            AbilityScore.of(12, 10, 10, 8, 18, 16))
            )
        }
    }
}
