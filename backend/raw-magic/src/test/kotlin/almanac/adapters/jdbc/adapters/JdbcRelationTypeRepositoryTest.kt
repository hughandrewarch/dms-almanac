package almanac.adapters.jdbc.adapters

import almanac.adapters.jdbc.JdbcRelationTypeRepository
import almanac.adapters.jdbc.util.DatabaseCleanerExtension
import almanac.adapters.jdbc.util.DatabaseDependencyLoader
import almanac.ports.persistence.RelationTypeRepositoryContractTest
import almanac.ports.persistence.RelationTypeRepository
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.test.context.ActiveProfiles

@ActiveProfiles(profiles = ["test"])
@SpringBootTest(classes = [DatabaseDependencyLoader::class])
@ExtendWith(DatabaseCleanerExtension::class)
class JdbcRelationTypeRepositoryTest : RelationTypeRepositoryContractTest() {

    @Autowired
    private lateinit var jdbcTemplate: JdbcTemplate

    override fun buildSubject(): RelationTypeRepository {
        return JdbcRelationTypeRepository(jdbcTemplate)
    }
}