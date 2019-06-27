package almanac.services

import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import almanac.models.PersonRelationType
import org.junit.jupiter.api.Test
import almanac.ports.persistence.PersonRepository
import almanac.ports.persistence.PlaceRepository

internal class PlaceServiceTest {

    private val repo = mock<PlaceRepository>()
    private val service = PlaceService(repo)

    @Test
    fun findPlace() {
        val settlementId = 1L

        service.findPlaces(settlementId)

        verify(repo).findAll(settlementId)
    }
}