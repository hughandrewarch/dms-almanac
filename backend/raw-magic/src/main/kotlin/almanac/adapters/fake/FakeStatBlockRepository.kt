package almanac.adapters.fake

import almanac.exceptions.StatBlockExistsException
import almanac.exceptions.StatBlockNotFoundException
import almanac.models.StatBlock
import almanac.ports.persistence.StatBlockRepository

class FakeStatBlockRepository : StatBlockRepository {
    private var statBlocks: MutableList<StatBlock> = mutableListOf()

    override fun create(personId: Long, str: Int, dex: Int, con: Int, int: Int, wis: Int, cha: Int): StatBlock {
        statBlocks.firstOrNull { it.personId == personId }?.let { throw StatBlockExistsException(personId) }

        val statBlock = StatBlock.of(
                personId,
                str = str,
                dex = dex,
                con = con,
                int = int,
                wis = wis,
                cha = cha)

        statBlocks.add(statBlock)

        return statBlock
    }

    override fun find(personId: Long): StatBlock {
        return statBlocks.firstOrNull { it.personId == personId } ?: throw StatBlockNotFoundException(personId)
    }

    fun init() {
    }
}