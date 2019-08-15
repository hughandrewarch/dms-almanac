package app.adapters

import almanac.adapters.fake.FakeStatBlockRepository
import almanac.ports.api.StatBlockRepository
import almanac.ports.api.StatBlockRepositoryContractTest
import almanac.services.StatBlockService

class DomainStatBlockRepositoryTest: StatBlockRepositoryContractTest() {

    override fun buildSubject(): StatBlockRepository {
        val statBlockService = StatBlockService(FakeStatBlockRepository())
        return DomainStatBlockRepository(statBlockService)
    }
}