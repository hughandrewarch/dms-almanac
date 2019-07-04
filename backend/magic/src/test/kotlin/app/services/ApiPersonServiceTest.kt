package app.services

import almanac.models.Person
import almanac.ports.api.PersonRepository
import app.serializers.PersonResponseSerializer
import com.nhaarman.mockitokotlin2.eq
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import com.nhaarman.mockitokotlin2.whenever
import org.junit.jupiter.api.Test

internal class ApiPersonServiceTest {

    private val personResponseSerializer = mock<PersonResponseSerializer>()
    private val personRepository = mock<PersonRepository>()

    private val subject = ApiPersonService(personResponseSerializer,
            personRepository)

    @Test
    fun find() {
        val id = 1L
        val person = Person(id, "person", "race", "person-d")

        whenever(personRepository.find(eq(id))).thenReturn(person)

        subject.find(id)

        verify(personRepository).find(id)
        verify(personResponseSerializer).serialize(person)
    }

}