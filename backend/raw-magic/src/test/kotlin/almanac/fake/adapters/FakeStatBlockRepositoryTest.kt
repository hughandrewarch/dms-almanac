package almanac.fake.adapters

import almanac.ports.persistence.StatBlockRepository
import almanac.ports.persistence.StatBlockRepositoryContractTest

class FakeStatBlockRepositoryTest: StatBlockRepositoryContractTest() {

    override fun buildSubject(): StatBlockRepository {
        return FakeStatBlockRepository()
    }
}