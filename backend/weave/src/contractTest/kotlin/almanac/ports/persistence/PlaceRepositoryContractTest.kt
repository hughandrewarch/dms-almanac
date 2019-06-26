package almanac.ports.persistence

import almanac.exceptions.PlaceNotFoundException
import almanac.models.Place
import almanac.models.PlaceType
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

abstract class PlaceRepositoryContractTest {
    private lateinit var subject: PlaceRepository

    @BeforeEach
    fun setUp() {
        subject = buildSubject()
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

    @Test
    fun findAll() {
        val place1 = subject.create(
                "Drunken Dancer",
                "tavern with live music and dancing",
                PlaceType.TAVERN)
        val place2 = subject.create(
                "Two Legged Barstool",
                "enchanters shop",
                PlaceType.SHOP)

        val people = subject.findAll()

        assertThat(people).containsExactlyInAnyOrder(
                Place(
                        place1.id,
                        "Drunken Dancer",
                        "tavern with live music and dancing",
                        PlaceType.TAVERN),
                Place(
                        place2.id,
                        "Two Legged Barstool",
                        "enchanters shop",
                        PlaceType.SHOP)
        )
    }
}
