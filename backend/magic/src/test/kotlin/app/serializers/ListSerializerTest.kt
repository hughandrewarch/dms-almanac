package app.serializers

import almanac.models.*
import app.models.list.ListItem
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test

internal class ListSerializerTest {

    val subject = ListSerializer()

    @Nested
    inner class Settlement {

        @Test
        fun `it return an empty list when nothing passed`() {
            val serialized = subject.settlement(emptyList())

            assertThat(serialized).isEmpty()
        }

        @Test
        fun `it return an serialized list when passed settlements`() {
            val hughan = Settlement(1L,
                    "Hughan",
                    6000,
                    "Royal Capital",
                    SettlementType.CITY
            )
            val amberlea = Settlement(2L,
                    "Amberlea",
                    1000,
                    "Farming central",
                    SettlementType.TOWN
            )

            val serialized = subject.settlement(listOf(hughan, amberlea))

            assertThat(serialized).containsExactlyInAnyOrder(
                    ListItem(1L, "Hughan"),
                    ListItem(2L, "Amberlea")
            )
        }

    }

    @Nested
    inner class Place {

        @Test
        fun `it return an empty list when nothing passed`() {
            val serialized = subject.place(emptyList())

            assertThat(serialized).isEmpty()
        }

        @Test
        fun `it return an serialized list when passed places`() {
            val dancer = Place(1L,
                    "Drunken Dancer",
                    "tavern with live music and dancing",
                    PlaceType.TAVERN)
            val barstool = Place(2L,
                    "Two Legged Barstool",
                    "enchanters shop",
                    PlaceType.SHOP)

            val serialized = subject.place(listOf(dancer, barstool))

            assertThat(serialized).containsExactlyInAnyOrder(
                    ListItem(1L, "Drunken Dancer"),
                    ListItem(2L, "Two Legged Barstool")
            )
        }
    }

    @Nested
    inner class Person {

        @Test
        fun `it return an empty list when nothing passed`() {
            val serialized = subject.person(emptyList())

            assertThat(serialized).isEmpty()
        }

        @Test
        fun `it return an serialized list when passed people`() {
            val lester = Person(1L, "Lester", "Human", "Dresses as a Rabbit")
            val lombeau = Person(2L, "Lombeau", "Human", "Wandering fancyman")

            val serialized = subject.person(listOf(lester, lombeau))

            assertThat(serialized).containsExactlyInAnyOrder(
                    ListItem(1L, "Lester"),
                    ListItem(2L, "Lombeau")
            )
        }
    }
}