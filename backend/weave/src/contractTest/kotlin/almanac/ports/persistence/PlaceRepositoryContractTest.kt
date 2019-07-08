package almanac.ports.persistence

import almanac.exceptions.PlaceNotFoundException
import almanac.models.Place
import almanac.models.PlaceType
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Nested
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

    @Nested
    inner class findAll() {

        private lateinit var place1: Place
        private lateinit var place2: Place

        @BeforeEach
        fun setup() {
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
            val people = subject.findAll(1L)

            assertThat(people).isEmpty()
        }

        @Test
        fun `findAll with settlement id and relations should return list of places`() {
            subject.createRelation(place1.id, 1L)

            val people = subject.findAll(1L)

            assertThat(people).containsExactlyInAnyOrder(
                    place1
            )
        }
    }

}
