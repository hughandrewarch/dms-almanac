package almanac.jdbc.adapters

import almanac.ports.persistence.PersonRepository
import almanac.ports.persistence.PersonRepositoryContractTest
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.datasource.DriverManagerDataSource
import org.springframework.stereotype.Component

@Component
class JdbcPersonRepositoryTest : PersonRepositoryContractTest() {

    override fun buildSubject(): PersonRepository {
        val dataSourceLoc = DriverManagerDataSource()

        dataSourceLoc.url = "jdbc:mysql://localhost/raw_magic"
        dataSourceLoc.username = "root"
        dataSourceLoc.password = ""

        return JdbcPersonRepository(JdbcTemplate(dataSourceLoc))
    }
}