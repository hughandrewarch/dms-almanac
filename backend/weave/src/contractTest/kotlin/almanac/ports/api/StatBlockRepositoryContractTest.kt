package almanac.ports.api

import almanac.exceptions.StatBlockExistsException
import almanac.exceptions.StatBlockNotFoundException
import almanac.models.AbilityScore
import almanac.models.StatBlock
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test

abstract class StatBlockRepositoryContractTest {
    private lateinit var subject: StatBlockRepository

    @BeforeEach
    fun setUp() {
        subject = buildSubject()
    }

    abstract fun buildSubject(): StatBlockRepository

    @Nested
    inner class create() {
        @Test
        fun `create should return a created statblock with default values`() {
            val created = subject.create(1L)

            assertThat(created).isEqualTo(
                    StatBlock(1, AbilityScore.of(10, 10, 10, 10, 10, 10))
            )
        }

        @Test
        fun `create should return a created statblock with set values`() {
            val created = subject.create(1L, str = 12, int = 8, wis = 18, cha = 16)

            assertThat(created).isEqualTo(
                    StatBlock(1,
                            AbilityScore.of(12, 10, 10, 8, 18, 16))
            )

        }

        @Test
        fun `create should throw a statblock exists exception when a stat block exists for that person`() {
            subject.create(1L)

            assertThatThrownBy {
                subject.create(1L)
            }
                    .isInstanceOf(StatBlockExistsException::class.java)
                    .hasMessageContaining("<1>")
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
            subject.create(1L)

            val statBlock = subject.find(1L)

            assertThat(statBlock).isEqualTo(
                    StatBlock(1, AbilityScore.of(10, 10, 10, 10, 10, 10))
            )
        }

        @Test
        fun `create should create a findable statblock with set values`() {
            subject.create(1L, str = 12, int = 8, wis = 18, cha = 16)

            val statBlock = subject.find(1L)

            assertThat(statBlock).isEqualTo(
                    StatBlock(1,
                            AbilityScore.of(12, 10, 10, 8, 18, 16))
            )
        }
    }
}
