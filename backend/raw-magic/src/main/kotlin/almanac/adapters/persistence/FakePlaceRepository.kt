package almanac.adapters.persistence

import almanac.exceptions.PlaceNotFoundException
import almanac.models.Place
import almanac.models.PlaceRelation
import almanac.models.PlaceType
import almanac.ports.persistence.PlaceRepository

class FakePlaceRepository : PlaceRepository {

    private var places: MutableList<Place> = mutableListOf()
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

    override fun findAll(settlementId: Long): List<Place> {
        val placeIds = placeRelation
                .filter { it.settlementId == settlementId }
                .map { it.id }

        return places.filter { placeIds.contains(it.id) }
    }

    fun init() {
        places = allFullPlaces
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

val placeRelation = listOf(
        PlaceRelation(id = 1, settlementId = 1),
        PlaceRelation(id = 2, settlementId = 1),
        PlaceRelation(id = 3, settlementId = 1),
        PlaceRelation(id = 4, settlementId = 2),
        PlaceRelation(id = 5, settlementId = 3),
        PlaceRelation(id = 6, settlementId = 3),
        PlaceRelation(id = 7, settlementId = 4)
)