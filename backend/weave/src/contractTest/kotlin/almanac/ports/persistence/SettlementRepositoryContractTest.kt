package almanac.ports.persistence

import almanac.exceptions.SettlementNotFoundException
import almanac.models.Settlement
import almanac.models.SettlementType
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

abstract class SettlementRepositoryContractTest {
    private lateinit var subject: SettlementRepository

    @BeforeEach
    fun setUp() {
        subject = buildSubject()
    }

    abstract fun buildSubject(): SettlementRepository

    @Test
    fun `find throws exception when no place found`() {

        assertThatThrownBy {
            subject.find(-1L)
        }
                .isInstanceOf(SettlementNotFoundException::class.java)
                .hasMessageContaining("<-1>")
    }

    @Test
    fun find() {
        val createdSettlement = subject.create(
                "Hughan",
                6000,
                "Royal Capital",
                SettlementType.CITY
        )


        val settlement = subject.find(createdSettlement.id)

        assertThat(settlement).isEqualTo(
                Settlement(
                        createdSettlement.id,
                        "Hughan",
                        6000,
                        "Royal Capital",
                        SettlementType.CITY
                )
        )
    }

    @Test
    fun findAll() {
        val hughan = subject.create(
                "Hughan",
                6000,
                "Royal Capital",
                SettlementType.CITY
        )
        val amberlea = subject.create(
                "Amberlea",
                1000,
                "Farming central",
                SettlementType.TOWN
        )

        val settlements = subject.findAll()

        assertThat(settlements).containsExactlyInAnyOrder(
                Settlement(
                        hughan.id,
                        "Hughan",
                        6000,
                        "Royal Capital",
                        SettlementType.CITY),
                Settlement(
                        amberlea.id,
                        "Amberlea",
                        1000,
                        "Farming central",
                        SettlementType.TOWN)
        )
    }

    @Test
    fun create() {
        val createdSettlement = subject.create(
                "Hughan",
                6000,
                "Royal Capital",
                SettlementType.CITY
        )


        subject.find(createdSettlement.id)

        assertThat(createdSettlement)
                .isEqualToIgnoringGivenFields(
                Settlement(
                        -1,
                        "Hughan",
                        6000,
                        "Royal Capital",
                        SettlementType.CITY
                ), "id"
        )
    }
}
