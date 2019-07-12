package almanac.services

import almanac.models.StatBlock
import almanac.ports.persistence.StatBlockRepository

class StatBlockService(private val statBlockRepository: StatBlockRepository) {

    fun create(personId: Long,
               str: Int,
               dex: Int,
               con: Int,
               int: Int,
               wis: Int,
               cha: Int
    ): StatBlock {
        return statBlockRepository.create(personId, str, dex, con, int, wis, cha)
    }

    fun find(personId: Long): StatBlock {
        return statBlockRepository.find(personId)
    }
}
