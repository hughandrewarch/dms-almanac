package almanac.services

import almanac.models.SettlementType
import almanac.ports.persistence.SettlementRepository
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import org.junit.jupiter.api.Test

internal class SettlementServiceTest {

    private val repo = mock<SettlementRepository>()
    private val subject = SettlementService(repo)

    @Test
    fun create() {
        subject.create("name", 300, "description", SettlementType.CITY)

        verify(repo).create("name", 300, "description", SettlementType.CITY)
    }

    @Test
    fun find() {
        val id = 1L

        subject.find(id)

        verify(repo).find(id)
    }

    @Test
    fun findAll() {
        subject.findAll()

        verify(repo).findAll()
    }
}