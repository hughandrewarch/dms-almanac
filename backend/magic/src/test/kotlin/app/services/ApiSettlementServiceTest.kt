package app.services

import almanac.models.*
import almanac.ports.api.PlaceRepository
import almanac.ports.api.SettlementRepository
import almanac.services.PersonService
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
    private val placeRepository = mock<PlaceRepository>()
    private val personService = mock<PersonService>()

    private val subject = ApiSettlementService(listSerializer,
            settlementResponseSerializer,
            settlementRepository,
            placeRepository,
            personService)

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
        val placeList = listOf(Place(20L, "place", "place-d", PlaceType.SHOP))
        val personList = listOf(Person(30L, "person", "race", "person-d"))

        whenever(settlementRepository.find(eq(id))).thenReturn(settlement)
        whenever(placeRepository.findAll(eq(settlementId))).thenReturn(placeList)
        whenever(personService.listDenizens(eq(settlementId))).thenReturn(personList)

        subject.find(id)

        verify(settlementRepository).find(id)
        verify(placeRepository).findAll(settlementId)
        verify(personService).listDenizens(settlementId)

        verify(settlementResponseSerializer).serialize(settlement, placeList, personList)
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