package app.serializers

import almanac.models.Relation
import almanac.models.RelationType
import app.models.RelationResponse
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

internal class RelationResponseSerializerTest {

    private val subject = RelationResponseSerializer()

    @Test
    fun serialize() {
        val settlementPerson = Relation(1L, 2L, RelationType(3L, "SETTLEMENT_PERSON"))

        val serialized = subject.serialize(settlementPerson)

        assertThat(serialized).isEqualTo(
                RelationResponse(1L, 2L, 3L)
        )
    }
}