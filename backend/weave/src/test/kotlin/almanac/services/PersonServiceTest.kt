package almanac.services

import almanac.ports.persistence.PersonRepository
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

internal class PersonServiceTest {

    private val repo = mock<PersonRepository>()
    private val subject = PersonService(repo)

    @Test
    fun create() {
        subject.create("Lombeau", "Human", "Wandering Fancyman")

        verify(repo).create("Lombeau", "Human", "Wandering Fancyman")
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

    @Test
    fun listDenizens() {
        val relatedId = 1L

        subject.listDenizens(relatedId)

        assertThat(true).isFalse()
    }
}