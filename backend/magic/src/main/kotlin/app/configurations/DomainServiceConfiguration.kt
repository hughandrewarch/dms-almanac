package app.configurations

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import almanac.fake.adapters.FakePersonRepository
import almanac.fake.adapters.FakePlaceRepository
import almanac.fake.adapters.FakeSettlementRepository
import almanac.fake.adapters.FakeStatBlockRepository
import almanac.jdbc.adapters.JdbcPersonRepository
import almanac.jdbc.adapters.JdbcPlaceRepository
import almanac.jdbc.adapters.JdbcSettlementRepository
import almanac.jdbc.adapters.JdbcStatBlockRepository
import almanac.services.PersonService
import almanac.services.PlaceService
import almanac.services.SettlementService
import almanac.services.StatBlockService
import org.springframework.jdbc.core.JdbcTemplate

@Configuration
class DomainServiceConfiguration {

    //TODO try to move these out of api layer?
    //Also possibly make individual repositories their own beans
    @Bean
    fun settlementService(jdbcTemplate: JdbcTemplate): SettlementService {
        val settlementRepo = JdbcSettlementRepository(jdbcTemplate)

        return SettlementService(settlementRepo)
    }

    @Bean
    fun placeService(jdbcTemplate: JdbcTemplate): PlaceService {
        val placeRepo = JdbcPlaceRepository(jdbcTemplate)

        return PlaceService(placeRepo)
    }

    @Bean
    fun personService(jdbcTemplate: JdbcTemplate): PersonService {
        val personRepo = JdbcPersonRepository(jdbcTemplate)

        return PersonService(personRepo)
    }

    @Bean
    fun statBlockService(jdbcTemplate: JdbcTemplate): StatBlockService {
        val statBlockRepo = JdbcStatBlockRepository(jdbcTemplate)

        return StatBlockService(statBlockRepo)
    }
}
