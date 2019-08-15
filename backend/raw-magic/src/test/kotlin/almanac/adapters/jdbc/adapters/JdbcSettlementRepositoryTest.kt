package almanac.adapters.jdbc.adapters

import almanac.adapters.jdbc.JdbcSettlementRepository
import almanac.adapters.jdbc.util.DatabaseCleanerExtension
import almanac.adapters.jdbc.util.DatabaseDependencyLoader
import almanac.ports.persistence.SettlementRepository
import almanac.ports.persistence.SettlementRepositoryContractTest
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.test.context.ActiveProfiles

@ActiveProfiles(profiles = ["test"])
@SpringBootTest(classes = [DatabaseDependencyLoader::class])
@ExtendWith(DatabaseCleanerExtension::class)
class JdbcSettlementRepositoryTest : SettlementRepositoryContractTest() {

    @Autowired
    private lateinit var jdbcTemplate: JdbcTemplate

    override fun buildSubject(): SettlementRepository{
        return JdbcSettlementRepository(jdbcTemplate)
    }
}
