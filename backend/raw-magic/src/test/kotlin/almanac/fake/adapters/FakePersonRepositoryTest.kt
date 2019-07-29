package almanac.fake.adapters

import almanac.ports.persistence.PersonRepository
import almanac.ports.persistence.PersonRepositoryContractTest

class FakePersonRepositoryTest: PersonRepositoryContractTest() {

    override fun buildSubject(): PersonRepository {
        return FakePersonRepository()
    }
}