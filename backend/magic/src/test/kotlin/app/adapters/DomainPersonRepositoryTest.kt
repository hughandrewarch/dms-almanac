package app.adapters

import almanac.adapters.fake.FakePersonRepository
import almanac.ports.api.PersonRepository
import almanac.ports.api.PersonRepositoryContractTest
import almanac.services.PersonService

class DomainPersonRepositoryTest: PersonRepositoryContractTest() {

    override fun buildSubject(): PersonRepository {
        val personService = PersonService(FakePersonRepository())
        return DomainPersonRepository(personService)
    }
}