package app.configurations

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import almanac.adapters.FakePersonRepository
import almanac.adapters.FakePlaceRepository
import almanac.adapters.FakeSettlementRepository
import almanac.adapters.FakeStatBlockRepository
import almanac.services.PersonService
import almanac.services.PlaceService
import almanac.services.SettlementService
import almanac.services.StatBlockService

@Configuration
class DomainServiceConfiguration {

    //TODO try to move these out of api layer
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
    fun personService(): PersonService {
        val personRepo = FakePersonRepository()
        personRepo.init()

        return PersonService(personRepo)
    }

    @Bean
    fun statBlockService(): StatBlockService {
        val statBlockRepo = FakeStatBlockRepository()
        statBlockRepo.init()

        return StatBlockService(statBlockRepo)
    }
}
