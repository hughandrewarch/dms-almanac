package app.services

import almanac.models.Relation
import almanac.models.RelationType
import almanac.ports.api.RelationRepository
import app.models.RelationCreateRequest
import app.serializers.RelationResponseSerializer
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import com.nhaarman.mockitokotlin2.whenever
import org.junit.jupiter.api.Test

internal class ApiRelationServiceTest {

    private val relationRepository = mock<RelationRepository>()
    private val relationResponseSerializer = mock<RelationResponseSerializer>()

    private val subject = ApiRelationService(
        relationRepository,
        relationResponseSerializer
    )

    @Test
    fun findAll() {
        subject.findAll()

        verify(relationRepository).findAll()
    }

    @Test
    fun create() {
        val relationCreateRequest = RelationCreateRequest(1L,2L)
        val relation = Relation(1L, 2L, RelationType(3L,"RT"))

        whenever(relationRepository.linkSettlementPerson(1L, 2L)).thenReturn(relation)

        subject.linkSettlementPerson(relationCreateRequest)

        verify(relationResponseSerializer).serialize(relation)
    }
}