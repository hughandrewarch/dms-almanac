package app.configurations

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import almanac.adapters.FakePersonRepository
import almanac.adapters.FakePlaceRepository
import almanac.adapters.FakeSettlementRepository
import almanac.services.PersonService
import almanac.services.PlaceService
import almanac.services.SettlementService

@Configuration
class DomainServiceConfiguration {

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
}
