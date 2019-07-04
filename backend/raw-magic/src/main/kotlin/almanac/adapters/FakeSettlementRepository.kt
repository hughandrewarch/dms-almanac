package almanac.adapters

import almanac.exceptions.SettlementNotFoundException
import almanac.models.Settlement
import almanac.models.SettlementType
import almanac.ports.persistence.SettlementRepository

class FakeSettlementRepository : SettlementRepository {

    private var settlements: MutableList<Settlement> = mutableListOf()
    private var id = 1L

    override fun find(id: Long): Settlement {
        return settlements.firstOrNull { it.id == id } ?: throw SettlementNotFoundException(id)
    }

    override fun findAll(): List<Settlement> {
        return settlements
    }

    override fun create(name: String, population: Long, description: String, type: SettlementType): Settlement {
        val settlement = Settlement(id++, name, population, description, type)
        settlements.add(settlement)
        return settlement
    }

    fun init() {
        settlements = allFullSettlements
    }
}

val allFullSettlements = mutableListOf(
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