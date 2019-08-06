package almanac.jdbc.adapters

import almanac.DatabaseDependencyLoader
import almanac.ports.persistence.PlaceRepository
import almanac.ports.persistence.PlaceRepositoryContractTest
import almanac.ports.persistence.SettlementRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.test.context.ActiveProfiles

@ActiveProfiles(profiles = ["test"])
@SpringBootTest(classes = [DatabaseDependencyLoader::class])
class JdbcPlaceRepositoryTest : PlaceRepositoryContractTest() {

    @Autowired
    private lateinit var jdbcTemplate: JdbcTemplate

    override fun buildSubject(): PlaceRepository {
        return JdbcPlaceRepository(jdbcTemplate)
    }

    override fun buildSettlementRepository(): SettlementRepository {
        return JdbcSettlementRepository(jdbcTemplate)
    }
}