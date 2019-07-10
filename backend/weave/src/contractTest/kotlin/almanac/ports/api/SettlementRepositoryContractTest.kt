package almanac.ports.api

import almanac.exceptions.SettlementNotFoundException
import almanac.models.Settlement
import almanac.models.SettlementType
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test

abstract class SettlementRepositoryContractTest {
    private lateinit var subject: SettlementRepository

    @BeforeEach
    fun setUp() {
        subject = buildSubject()
    }

    abstract fun buildSubject(): SettlementRepository

    @Test
    fun `create returns a created settlement`() {
        val created = subject.create("Hughan", 5000, "Nations capital", SettlementType.CITY)

        assertThat(created)
                .isEqualToIgnoringGivenFields(
                        Settlement(
                                -1,
                                "Hughan",
                                5000,
                                "Nations capital",
                                SettlementType.CITY
                        ),
                        "id")
    }

    @Nested
    inner class find() {

        @Test
        fun `it should throw an exception when no settlement found`() {

            assertThatThrownBy {
                subject.find(-1)
            }
                    .isInstanceOf(SettlementNotFoundException::class.java)
                    .hasMessageContaining("<-1>")
        }

        @Test
        fun `it should return a found settlement`() {
            val created = subject.create("Hughan", 5000, "Nations capital", SettlementType.CITY)

            val settlement = subject.find(created.id)

            assertThat(created).isEqualTo(settlement)
        }
    }

    @Nested
    inner class findAll() {

        @Test
        fun `it should return empty if no settlements exist`() {
            val people = subject.findAll()

            assertThat(people).isEmpty()
        }

        @Test
        fun `it should list of matching denizens`() {
            val settlement1 = subject.create("Hughan", 5000, "Nations capital", SettlementType.CITY)
            val settlement2 = subject.create("Elkshorn", 500, "Hunting village", SettlementType.VILLAGE)

            val settlements = subject.findAll()

            assertThat(settlements).containsExactlyInAnyOrder(
                    settlement1, settlement2
            )
        }
    }
}
