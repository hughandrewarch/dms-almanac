package configurations

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import adapters.FakePersonRepository
import adapters.FakePlaceRepository
import adapters.FakeSettlementRepository
import services.PersonService
import services.PlaceService
import services.SettlementService

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
