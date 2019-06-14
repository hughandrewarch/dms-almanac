package weave.configurations

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import weave.adapters.FakePersonRepository
import weave.adapters.FakePlaceRepository
import weave.adapters.FakeSettlementRepository
import weave.services.PersonService
import weave.services.PlaceService
import weave.services.SettlementService

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
