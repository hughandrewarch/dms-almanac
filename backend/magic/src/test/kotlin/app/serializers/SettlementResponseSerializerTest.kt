package app.serializers

import almanac.models.*
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

internal class SettlementResponseSerializerTest {

    val subject = SettlementResponseSerializer()

    @Test
    fun serialize() {
        val hughan = Settlement(1L, "Hughan", 6000, "Royal Capital", SettlementType.CITY)

        val serialized = subject.serialize(
                hughan
        )

        assertThat(serialized.settlement).isEqualTo(hughan)
    }
}