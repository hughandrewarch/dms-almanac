package almanac.services

import almanac.ports.persistence.PlaceRepository
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import org.junit.jupiter.api.Test

internal class PlaceServiceTest {

    private val repo = mock<PlaceRepository>()
    private val subject = PlaceService(repo)

    @Test
    fun findPlace() {
        val settlementId = 1L

        subject.findPlaces(settlementId)

        verify(repo).findAll(settlementId)
    }
}