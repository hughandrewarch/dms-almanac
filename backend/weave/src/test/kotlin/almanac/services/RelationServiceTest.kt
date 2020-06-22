package almanac.services

import almanac.models.RelationType
import almanac.ports.persistence.RelationTypeRepository
import almanac.ports.persistence.RelationRepository
import com.nhaarman.mockitokotlin2.eq
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import com.nhaarman.mockitokotlin2.whenever
import org.junit.jupiter.api.Test

internal class RelationServiceTest {
    private val relationRepo = mock<RelationRepository>()
    private val relationTypeRepo = mock<RelationTypeRepository>()
    private val subject = RelationService(relationRepo, relationTypeRepo)

    @Test
    fun create() {
        subject.create(1L, 2L, 3L)

        verify(relationRepo).create(1L, 2L, 3L)
    }

    @Test
    fun findAll() {
        subject.findAll()

        verify(relationRepo).findAll()
    }

    @Test
    fun linkSettlementPerson() {
        val relationType = RelationType(3L, "SETTLEMENT_PERSON")
        whenever(relationTypeRepo.findByName(eq("SETTLEMENT_PERSON"))).thenReturn(relationType)

        subject.linkSettlementPerson(1L, 2L)

        verify(relationRepo).create(1L, 2L,3L)
    }
}
