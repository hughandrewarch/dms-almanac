package almanac.adapters.jdbc.adapters

import almanac.adapters.jdbc.JdbcPersonRepository
import almanac.adapters.jdbc.JdbcStatBlockRepository
import almanac.adapters.jdbc.util.DatabaseCleanerExtension
import almanac.adapters.jdbc.util.DatabaseDependencyLoader
import almanac.ports.persistence.PersonRepository
import almanac.ports.persistence.StatBlockRepository
import almanac.ports.persistence.StatBlockRepositoryContractTest
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.test.context.ActiveProfiles

@ActiveProfiles(profiles = ["test"])
@SpringBootTest(classes = [DatabaseDependencyLoader::class])
@ExtendWith(DatabaseCleanerExtension::class)
class JdbcStatBlockRepositoryTest : StatBlockRepositoryContractTest() {

    @Autowired
    private lateinit var jdbcTemplate: JdbcTemplate

    override fun buildSubject(): StatBlockRepository {
        return JdbcStatBlockRepository(jdbcTemplate)
    }

    override fun buildPersonRepository(): PersonRepository {
        return JdbcPersonRepository(jdbcTemplate)
    }
}
