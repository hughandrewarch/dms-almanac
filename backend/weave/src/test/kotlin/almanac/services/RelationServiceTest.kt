package almanac.services

import almanac.ports.persistence.RelationRepository
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import org.junit.jupiter.api.Test

//TODO maybe make a base service test class/functions?
internal class RelationServiceTest {
    private val repo = mock<RelationRepository>()
    private val subject = RelationService(repo)

    @Test
    fun create() {
        subject.create(1L, 2L, 3L)

        verify(repo).create(1L, 2L, 3L)
    }

    @Test
    fun findAll() {
        subject.findAll()

        verify(repo).findAll()
    }
}
