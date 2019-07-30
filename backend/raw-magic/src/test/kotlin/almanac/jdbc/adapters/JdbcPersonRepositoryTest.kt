package almanac.jdbc.adapters

import almanac.DatabaseDependencyLoader
import almanac.ports.persistence.PersonRepository
import almanac.ports.persistence.PersonRepositoryContractTest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.test.context.ActiveProfiles

@ActiveProfiles(profiles = ["test"])
@SpringBootTest(classes = [DatabaseDependencyLoader::class])
class JdbcPersonRepositoryTest : PersonRepositoryContractTest() {

    @Autowired
    private lateinit var jdbcTemplate: JdbcTemplate

    override fun buildSubject(): PersonRepository {
        return JdbcPersonRepository(jdbcTemplate)
    }
}