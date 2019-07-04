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
        return SettlementService(FakeSettlementRepository())
    }

    @Bean
    fun placeService(): PlaceService {
        return PlaceService(FakePlaceRepository())
    }

    @Bean
    fun personService(): PersonService {
        return PersonService(FakePersonRepository())
    }
}
