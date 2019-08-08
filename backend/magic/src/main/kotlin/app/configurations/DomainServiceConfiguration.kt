package app.configurations

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import almanac.fake.adapters.FakePersonRepository
import almanac.fake.adapters.FakePlaceRepository
import almanac.fake.adapters.FakeSettlementRepository
import almanac.fake.adapters.FakeStatBlockRepository
import almanac.jdbc.adapters.JdbcPersonRepository
import almanac.services.PersonService
import almanac.services.PlaceService
import almanac.services.SettlementService
import almanac.services.StatBlockService
import org.springframework.jdbc.core.JdbcTemplate

@Configuration
class DomainServiceConfiguration {

    //TODO try to move these out of api layer
    //Also possibly make individual repos their own beans
    @Bean
    fun settlementService(): SettlementService {
        val settlementRepo = FakeSettlementRepository()
        settlementRepo.init()

        return SettlementService(settlementRepo)
    }

    @Bean
    fun placeService(): PlaceService {
        val placeRepo = FakePlaceRepository()
        placeRepo.init()

        return PlaceService(placeRepo)
    }

    @Bean
    fun personService(jdbcTemplate: JdbcTemplate): PersonService {
        val personRepo = JdbcPersonRepository(jdbcTemplate)

        return PersonService(personRepo)
    }

    @Bean
    fun statBlockService(): StatBlockService {
        val statBlockRepo = FakeStatBlockRepository()
        statBlockRepo.init()

        return StatBlockService(statBlockRepo)
    }
}
