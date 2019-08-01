package almanac.ports.persistence

import almanac.models.Settlement
import almanac.models.SettlementType
import almanac.ports.persistence.base.BaseRepository

interface SettlementRepository : BaseRepository<Settlement> {
    fun create(
            name: String,
            population: Long,
            description: String,
            type: SettlementType
    ): Settlement

    //TODO remove
    fun clear()
}