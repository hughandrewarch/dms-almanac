package almanac.adapters

import almanac.exceptions.StatblockNotFoundException
import almanac.models.StatBlock
import almanac.ports.persistence.StatBlockRepository

class FakeStatBlockRepository : StatBlockRepository {

    private var statBlocks: MutableList<StatBlock> = mutableListOf()

    //TODO throw exception when statblock exists
    override fun create(personId: Long, str: Int, dex: Int, con: Int, int: Int, wis: Int, cha: Int): StatBlock {
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
        return statBlocks.firstOrNull { it.personId == personId } ?: throw StatblockNotFoundException(personId)
    }
}