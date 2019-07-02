package almanac.services

import almanac.models.PersonRelationType
import almanac.ports.persistence.PersonRepository
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import org.junit.jupiter.api.Test

internal class PersonServiceTest {

    private val repo = mock<PersonRepository>()
    private val subject = PersonService(repo)

    @Test
    fun find() {
        val id = 1L

        subject.find(id)

        verify(repo).find(id)
    }

    @Test
    fun listDenizens() {
        val relatedId = 1L

        subject.listDenizens(relatedId)

        verify(repo).findAll(PersonRelationType.DENIZEN, relatedId)
    }
}