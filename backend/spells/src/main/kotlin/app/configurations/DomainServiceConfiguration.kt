package app.configurations

import almanac.adapters.jdbc.*
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import almanac.services.*
import org.springframework.jdbc.core.JdbcTemplate

@Configuration
class DomainServiceConfiguration {

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
    fun relationService(jdbcTemplate: JdbcTemplate,
                        jdbcRelationTypeRepository: JdbcRelationTypeRepository): RelationService {
        val relationServiceRepo = JdbcRelationRepository(jdbcTemplate, jdbcRelationTypeRepository)

        return RelationService(relationServiceRepo)
    }

    @Bean
    fun relationTypeService(jdbcTemplate: JdbcTemplate): RelationTypeService {
        val relationTypeServiceRepo = JdbcRelationTypeRepository(jdbcTemplate)

        return RelationTypeService(relationTypeServiceRepo)
    }

    @Bean
    fun statBlockService(jdbcTemplate: JdbcTemplate): StatBlockService {
        val statBlockRepo = JdbcStatBlockRepository(jdbcTemplate)

        return StatBlockService(statBlockRepo)
    }
}
