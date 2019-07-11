package almanac.ports.persistence

import almanac.exceptions.StatblockNotFoundException
import almanac.models.Ability
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
                    StatBlock(1, abilityScores(10, 10, 10, 10, 10, 10))
            )
        }

        @Test
        fun `create should return a created statblock with set values`() {
            val created = subject.create(1L, str = 12, int = 8, wis = 18, cha = 16)

            assertThat(created).isEqualTo(
                    StatBlock(1,
                            abilityScores(12, 10, 10, 8, 18, 16))
            )

        }
    }

    @Nested
    inner class find() {

        @Test
        fun `find throws exception when no statblock found`() {

            assertThatThrownBy {
                subject.find(-1L)
            }
                    .isInstanceOf(StatblockNotFoundException::class.java)
                    .hasMessageContaining("<-1>")
        }

        @Test
        fun `create should return a create a findable statblock with default values`() {
            subject.create(1L)

            val statBlock = subject.find(1L)

            assertThat(statBlock).isEqualTo(
                    StatBlock(1, abilityScores(10, 10, 10, 10, 10, 10))
            )
        }

        @Test
        fun `create should create a findable statblock with set values`() {
            subject.create(1L, str = 12, int = 8, wis = 18, cha = 16)

            val statBlock = subject.find(1L)

            assertThat(statBlock).isEqualTo(
                    StatBlock(1,
                            abilityScores(12, 10, 10, 8, 18, 16))
            )
        }
    }
}

private fun abilityScores(str: Int, dex: Int, con: Int, int: Int, wis: Int, cha: Int): Map<Ability, Int> {
    return mapOf(
            Pair(Ability.STR, str),
            Pair(Ability.DEX, dex),
            Pair(Ability.CON, con),
            Pair(Ability.INT, int),
            Pair(Ability.WIS, wis),
            Pair(Ability.CHA, cha)
    )
}