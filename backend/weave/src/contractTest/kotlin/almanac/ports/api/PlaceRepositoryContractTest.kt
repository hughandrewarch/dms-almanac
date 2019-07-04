package almanac.ports.api

import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

abstract class PlaceRepositoryContractTest {
    private lateinit var subject: PlaceRepository

    @BeforeEach
    fun setUp() {
        subject = buildSubject()
    }

    abstract fun buildSubject(): PlaceRepository

    @Test
    fun findAll() {
        TODO()
    }
}
