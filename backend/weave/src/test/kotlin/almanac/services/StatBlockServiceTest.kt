package almanac.services

import almanac.ports.persistence.StatBlockRepository
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import org.junit.jupiter.api.Test

internal class StatBlockServiceTest {

    private val repo = mock<StatBlockRepository>()
    private val subject = StatBlockService(repo)

    @Test
    fun create() {
        subject.create(1L, 2, 3, 4, 5, 6, 7)

        verify(repo).create(1L, 2, 3, 4, 5, 6, 7)
    }

    @Test
    fun find() {
        subject.find(1L)

        verify(repo).find(1L)
    }
}