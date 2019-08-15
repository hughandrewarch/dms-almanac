package app.configurations

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import almanac.adapters.jdbc.JdbcPersonRepository
import almanac.adapters.jdbc.JdbcPlaceRepository
import almanac.adapters.jdbc.JdbcSettlementRepository
import almanac.adapters.jdbc.JdbcStatBlockRepository
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
