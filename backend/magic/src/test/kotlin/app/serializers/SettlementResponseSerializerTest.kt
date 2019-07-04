package app.serializers

import almanac.models.*
import app.models.SettlementResponse
import app.models.list.ListItem
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*

internal class SettlementResponseSerializerTest {

    val listSerializer = ListSerializer()
    val subject = SettlementResponseSerializer(listSerializer)

    @Test
    fun serialize() {
        val hughan = Settlement(1L, "Hughan", 6000, "Royal Capital", SettlementType.CITY)

        val dancer = Place(1L, "Drunken Dancer", "tavern with live music and dancing", PlaceType.TAVERN)
        val barstool = Place(2L, "Two Legged Barstool", "enchanters shop", PlaceType.SHOP)

        val lester = Person(1L, "Lester", "Human", "Dresses as a Rabbit")
        val lombeau = Person(2L, "Lombeau", "Human", "Wandering fancyman")

        val serialized = subject.serialize(
                hughan,
                listOf(dancer, barstool),
                listOf(lester, lombeau)
        )

        assertThat(serialized.settlement).isEqualTo(hughan)
        assertThat(serialized.placeList).containsExactlyInAnyOrder(
                ListItem(1L, "Drunken Dancer"),
                ListItem(2L, "Two Legged Barstool")
        )
        assertThat(serialized.personList).containsExactlyInAnyOrder(
                ListItem(1L, "Lester"),
                ListItem(2L, "Lombeau")
        )
    }
}