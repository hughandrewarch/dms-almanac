package almanac.adapters.persistence

import almanac.models.Settlement
import almanac.models.SettlementType
import almanac.ports.persistence.SettlementRepository

class FakeSettlementRepository : SettlementRepository {

    override fun find(id: Long): Settlement {
        return allFullSettlements.first { it.id == id }
    }

    override fun findAll(): List<Settlement> {
        return allFullSettlements
    }
}

val allFullSettlements = listOf(
        Settlement(
                id = 1,
                name = "Hughan",
                population = 5000,
                description = "Capital city, 3 wall layers, 9 districts and a castle",
                type = SettlementType.CITY),
        Settlement(
                id = 2,
                name = "Amberlea",
                population = 1000,
                description = "farming central, fortified storehouses, elevated on walls",
                type = SettlementType.TOWN),
        Settlement(
                id = 3,
                name = "Roseport",
                population = 800,
                description = "largest port city",
                type = SettlementType.TOWN),
        Settlement(
                id = 4,
                name = "Elkshorn",
                population = 500,
                description = "small hunting village on the edge of the fireleaf forest",
                type = SettlementType.VILLAGE)
)