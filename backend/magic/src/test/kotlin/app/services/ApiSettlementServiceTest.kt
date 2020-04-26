package app.services

import almanac.models.*
import almanac.ports.api.SettlementRepository
import app.models.SettlementCreateRequest
import app.serializers.ListSerializer
import app.serializers.SettlementResponseSerializer
import com.nhaarman.mockitokotlin2.eq
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import com.nhaarman.mockitokotlin2.whenever
import org.junit.jupiter.api.Test

internal class ApiSettlementServiceTest {

    private val listSerializer = mock<ListSerializer>()
    private val settlementResponseSerializer = mock<SettlementResponseSerializer>()
    private val settlementRepository = mock<SettlementRepository>()

    private val subject = ApiSettlementService(listSerializer,
            settlementResponseSerializer,
            settlementRepository)

    @Test
    fun find() {
        val id = 1L
        val settlementId = 10L
        val settlement = Settlement(
                settlementId,
                "name",
                100,
                "description",
                SettlementType.CITY
        )

        whenever(settlementRepository.find(eq(id))).thenReturn(settlement)

        subject.find(id)

        verify(settlementRepository).find(id)

        verify(settlementResponseSerializer).serialize(settlement)
    }

    @Test
    fun findAll() {
        val settlements = listOf(Settlement(
                10L,
                "name",
                100,
                "description",
                SettlementType.CITY
        ))

        whenever(settlementRepository.findAll()).thenReturn(settlements)

        subject.findAll()

        verify(listSerializer).settlement(settlements)
    }

    @Test
    fun create() {
        val settlementCreateRequest = SettlementCreateRequest(
                "name",
                100,
                "description",
                SettlementType.CITY
        )

        subject.create(settlementCreateRequest)

        verify(settlementRepository).create("name", 100, "description", SettlementType.CITY)
    }
}