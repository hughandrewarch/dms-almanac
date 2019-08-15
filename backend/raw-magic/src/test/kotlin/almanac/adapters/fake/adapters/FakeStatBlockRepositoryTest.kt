package almanac.adapters.fake.adapters

import almanac.adapters.fake.FakePersonRepository
import almanac.adapters.fake.FakeStatBlockRepository
import almanac.ports.persistence.PersonRepository
import almanac.ports.persistence.StatBlockRepository
import almanac.ports.persistence.StatBlockRepositoryContractTest

class FakeStatBlockRepositoryTest : StatBlockRepositoryContractTest() {

    override fun buildSubject(): StatBlockRepository {
        return FakeStatBlockRepository()
    }

    override fun buildPersonRepository(): PersonRepository {
        return FakePersonRepository()
    }
}