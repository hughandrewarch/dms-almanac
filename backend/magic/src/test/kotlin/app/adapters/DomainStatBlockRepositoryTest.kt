package app.adapters

import almanac.adapters.FakeStatBlockRepository
import almanac.ports.api.StatBlockRepository
import almanac.ports.api.StatBlockRepositoryContractTest
import almanac.services.StatBlockService

class DomainStatBlockRepositoryTest: StatBlockRepositoryContractTest() {

    override fun buildSubject(): StatBlockRepository {
        val statBlockService = StatBlockService(FakeStatBlockRepository())
        return DomainStatBlockRepository(statBlockService)
    }
}