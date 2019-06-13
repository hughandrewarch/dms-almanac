package weave.spi.adapters

import com.api.weave.domain.ports.spi.PlaceRepository
import com.api.weave.domain.models.Place
import com.api.weave.domain.models.PlaceRelation
import com.api.weave.domain.models.PlaceType
import org.springframework.stereotype.Component

@Component
class FakePlaceRepository : PlaceRepository {
    override fun find(id: Long): Place {
        return allFullPlaces.first{ it.id == id }
    }

    override fun findAll(): List<Place> {
        return allFullPlaces
    }

    override fun findAll(settlementId: Long): List<Place> {
        val placeIds = placeRelation
                .filter { it.settlementId == settlementId }
                .map { it.id }

        return allFullPlaces.filter { placeIds.contains(it.id) }
    }
}

val allFullPlaces = listOf(
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