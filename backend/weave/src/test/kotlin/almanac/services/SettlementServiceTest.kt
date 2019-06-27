package almanac.services

import almanac.ports.persistence.SettlementRepository
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import org.junit.jupiter.api.Test

internal class SettlementServiceTest {

    private val repo = mock<SettlementRepository>()
    private val service = SettlementService(repo)

    @Test
    fun find() {
        val id = 1L

        service.find(id)

        verify(repo).find(id)
    }

    @Test
    fun findAll() {
        service.findAll()

        verify(repo).findAll()
    }
}