package weave.api.configurations

import com.api.weave.domain.services.PersonService
import com.api.weave.domain.services.PlaceService
import com.api.weave.domain.services.SettlementService
import com.api.weave.spi.adapters.FakePersonRepository
import com.api.weave.spi.adapters.FakePlaceRepository
import com.api.weave.spi.adapters.FakeSettlementRepository
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

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
