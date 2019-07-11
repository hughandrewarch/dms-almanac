package almanac.adapters

import almanac.ports.persistence.StatBlockRepositoryContractTest
import almanac.ports.persistence.StatBlockRepository

class FakeStatBlockRepositoryTest: StatBlockRepositoryContractTest() {

    override fun buildSubject(): StatBlockRepository {
        return FakeStatBlockRepository()
    }
}