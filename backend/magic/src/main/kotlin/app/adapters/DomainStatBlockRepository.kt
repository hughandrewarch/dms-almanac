package app.adapters

import almanac.models.StatBlock
import almanac.ports.api.StatBlockRepository
import almanac.services.StatBlockService
import org.springframework.stereotype.Component

@Component
class DomainStatBlockRepository(private val service: StatBlockService): StatBlockRepository {

    override fun create(personId: Long, str: Int, dex: Int, con: Int, int: Int, wis: Int, cha: Int): StatBlock {
        return service.create(personId, str, dex, con, int, wis, cha)
    }

    override fun find(personId: Long): StatBlock {
        return service.find(personId)
    }
}
