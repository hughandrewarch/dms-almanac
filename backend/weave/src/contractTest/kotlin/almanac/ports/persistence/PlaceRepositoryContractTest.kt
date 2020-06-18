package almanac.ports.persistence

import almanac.exceptions.PlaceNotFoundException
import almanac.models.Place
import almanac.models.PlaceType
import almanac.models.SettlementType
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

abstract class PlaceRepositoryContractTest {
    private lateinit var subject: PlaceRepository
    private lateinit var settlementRepository: SettlementRepository

    @BeforeEach
    fun setUp() {
        subject = buildSubject()
        settlementRepository = buildSettlementRepository()
    }

    abstract fun buildSubject(): PlaceRepository

    @Test
    fun create() {
        val createdPlace = subject.create(
                "Drunken Dancer",
                "tavern with live music and dancing",
                PlaceType.TAVERN
        )

        assertThat(createdPlace)
                .isEqualToIgnoringGivenFields(
                        Place(
                                -1,
                                "Drunken Dancer",
                                "tavern with live music and dancing",
                                PlaceType.TAVERN)
                        , "id")
    }

    @Test
    fun find() {
        val createdPlace = subject.create(
                "Drunken Dancer",
                "tavern with live music and dancing",
                PlaceType.TAVERN)

        val place = subject.find(createdPlace.id)

        assertThat(place).isEqualTo(
                Place(
                        createdPlace.id,
                        "Drunken Dancer",
                        "tavern with live music and dancing",
                        PlaceType.TAVERN
                )
        )
    }

    @Test //nested findAll
    fun `find throws exception when no place found`() {

        assertThatThrownBy {
            subject.find(-1L)
        }
                .isInstanceOf(PlaceNotFoundException::class.java)
                .hasMessageContaining("<-1>")
    }

    @Test //nested findAll
    fun `findAll without settlement id`() {
        val place1 = subject.create("Drunken Dancer", "tavern with live music and dancing", PlaceType.TAVERN)
        val place2 = subject.create("Two Legged Barstool", "enchanters shop", PlaceType.SHOP)

        val people = subject.findAll()

        assertThat(people).containsExactlyInAnyOrder(
                place1, place2
        )
    }

    abstract fun buildSettlementRepository(): SettlementRepository
}
