package almanac.ports.api

import almanac.models.Place
import almanac.models.PlaceType
import org.assertj.core.api.Assertions.assertThat
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

    @Nested
    inner class create() {

        @Test
        fun `it returns a created place`() {
            val created = subject.create("Ship Wrecked", "Converted ship wreck", PlaceType.TAVERN)

            assertThat(created)
                    .isEqualToIgnoringGivenFields(
                            Place(-1,
                                    "Ship Wrecked",
                                    "Converted ship wreck",
                                    PlaceType.TAVERN),
                            "id")
        }
    }
}
