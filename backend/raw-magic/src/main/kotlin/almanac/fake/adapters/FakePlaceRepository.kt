package almanac.fake.adapters

import almanac.exceptions.PlaceNotFoundException
import almanac.models.Place
import almanac.models.SettlementPlace
import almanac.models.PlaceType
import almanac.ports.persistence.PlaceRepository

class FakePlaceRepository : PlaceRepository {
    private var places: MutableList<Place> = mutableListOf()

    private var relations: MutableList<SettlementPlace> = mutableListOf()
    private var id = 1L

    override fun find(id: Long): Place {
        return places.firstOrNull { it.id == id } ?: throw PlaceNotFoundException(id)
    }
    override fun findAll(): List<Place> {
        return places
    }

    override fun create(name: String, description: String, type: PlaceType): Place {
        val place = Place(id++, name, description, type)
        places.add(place)
        return place
    }

    override fun createRelation(settlementId: Long, placeId: Long) {
        relations.add(SettlementPlace(settlementId, placeId))
    }

    override fun findAll(settlementId: Long): List<Place> {
        val placeIds = relations
                .filter { it.settlementId == settlementId }
                .map { it.placeId }

        return places.filter { placeIds.contains(it.id) }
    }

    fun init() {
        places = allFullPlaces
        relations = placeRelations
    }
}

val allFullPlaces = mutableListOf(
        Place(
                id = 1,
                name = "Three Eyed Owls",
                description = "local adventuring guild",
                type = PlaceType.GUILD),
        Place(
                id = 2,
                name = "Drunkin Dancer",
                description = "local dance bar",
                type = PlaceType.TAVERN),
        Place(
                id = 3,
                name = "Cartographers Compass",
                description = "map shop and cartographers guild",
                type = PlaceType.SHOP),
        Place(
                id = 4,
                name = "Place a",
                description = "local place",
                type = PlaceType.SHOP),
        Place(
                id = 5,
                name = "Place b",
                description = "local place",
                type = PlaceType.TAVERN),
        Place(
                id = 6,
                name = "Place c",
                description = "local place",
                type = PlaceType.SHOP),
        Place(
                id = 7,
                name = "Place d",
                description = "local place",
                type = PlaceType.TAVERN)
)

val placeRelations = mutableListOf(
        SettlementPlace(settlementId = 1, placeId = 1),
        SettlementPlace(settlementId = 1, placeId = 2),
        SettlementPlace(settlementId = 1, placeId = 3),
        SettlementPlace(settlementId = 2, placeId = 4),
        SettlementPlace(settlementId = 3, placeId = 5),
        SettlementPlace(settlementId = 3, placeId = 6),
        SettlementPlace(settlementId = 4, placeId = 7)
)