package app.serializers

import almanac.models.Person
import app.models.PersonResponse
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

internal class PersonResponseSerializerTest {

    private val subject = PersonResponseSerializer()

    @Test
    fun serialize() {
        val lester = Person(1L, "Lester", "Human", "Dresses as a Rabbit")

        val serialized = subject.serialize(lester)

        assertThat(serialized).isEqualTo(
                PersonResponse(lester)
        )
    }
}