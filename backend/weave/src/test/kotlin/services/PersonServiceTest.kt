package services

import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import models.PersonRelationType
import org.junit.jupiter.api.Test
import ports.persistence.PersonRepository

internal class PersonServiceTest {

    private val repo = mock<PersonRepository>()
    private val service = PersonService(repo)

    @Test
    fun listDenizens() {
        val relatedId = 1L

        service.listDenizens(relatedId)

        verify(repo).findAll(PersonRelationType.DENIZEN, relatedId)
    }
}