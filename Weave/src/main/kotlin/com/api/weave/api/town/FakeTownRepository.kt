package com.api.weave.api.town

import com.api.weave.models.Town
import org.springframework.stereotype.Component

@Component
class FakeTownRepository : TownRepository {

    override fun find(id: Long): Town {
        return allFullTowns.first { it.id == id }
    }

    override fun findAll(): List<Town> {
        return allFullTowns
    }
}

val allFullTowns = listOf(
        Town(
                id = 1,
                name = "Hughan",
                population = 5000,
                description = "Capital city, 3 wall layers, 9 districts and a castle"),
        Town(
                id = 2,
                name = "Amberlea",
                population = 1000,
                description = "farming central, fortified storehouses, elevated on walls"),
        Town(
                id = 3,
                name = "Roseport",
                population = 800,
                description = "largest port city"),
        Town(
                id = 4,
                name = "Elkshorn",
                population = 500,
                description = "small hunting village on the edge of the fireleaf forest")
)