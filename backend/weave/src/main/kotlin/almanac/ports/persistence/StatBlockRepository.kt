package almanac.ports.persistence

import almanac.models.StatBlock

interface StatBlockRepository {
    fun create(
            personId: Long,
            str: Int = 10,
            dex: Int = 10,
            con: Int = 10,
            int: Int = 10,
            wis: Int = 10,
            cha: Int = 10
    ): StatBlock

    fun find(personId: Long): StatBlock

    //TODO remove
    fun clear()
}