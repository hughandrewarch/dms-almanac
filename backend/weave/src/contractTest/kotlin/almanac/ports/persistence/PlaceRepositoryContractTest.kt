package almanac.ports.persistence

import almanac.exceptions.PlaceNotFoundException
import almanac.models.Place
import almanac.models.PlaceType
import almanac.models.Settlement
import almanac.models.SettlementType
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test

abstract class PlaceRepositoryContractTest {
    private lateinit var subject: PlaceRepository
    private lateinit var settlementRepository: SettlementRepository

    @BeforeEach
    fun setUp() {
        subject = buildSubject()
        settlementRepository = buildSettlementRepository()
        subject.clear()
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

    @Test
    fun `find throws exception when no place found`() {

        assertThatThrownBy {
            subject.find(-1L)
        }
                .isInstanceOf(PlaceNotFoundException::class.java)
                .hasMessageContaining("<-1>")
    }

    @Nested
    inner class findAll() {

        private lateinit var settlement: Settlement
        private lateinit var place1: Place
        private lateinit var place2: Place

        @BeforeEach
        fun setup() {
            settlement = settlementRepository.create("Hughan", 6000, "Royal Capital", SettlementType.CITY)
            place1 = subject.create("Drunken Dancer", "tavern with live music and dancing", PlaceType.TAVERN)
            place2 = subject.create("Two Legged Barstool", "enchanters shop", PlaceType.SHOP)
        }

        @Test
        fun `findAll without settlement id`() {
            val people = subject.findAll()

            assertThat(people).containsExactlyInAnyOrder(
                    place1, place2
            )
        }

        @Test
        fun `findAll with settlement id and no relations should return empty list`() {
            val people = subject.findAll(settlement.id)

            assertThat(people).isEmpty()
        }

        @Test
        fun `findAll with settlement id and relations should return list of places`() {
            subject.createRelation(settlement.id, place1.id)

            val people = subject.findAll(settlement.id)

            assertThat(people).containsExactlyInAnyOrder(
                    place1
            )
        }
    }

    abstract fun buildSettlementRepository(): SettlementRepository
}
