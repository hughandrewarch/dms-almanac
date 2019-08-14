package almanac.models

data class StatBlock(
        val personId: Long,
        val abilityScores: Map<Ability, Int> = default
) {
    companion object {
        fun of(personId: Long, str: Int = 10, dex: Int = 10, con: Int = 10, int: Int = 10, wis: Int = 10, cha: Int = 10): StatBlock {
            return StatBlock(
                    personId,
                    AbilityScore.of(str,dex,con,int,wis,cha)
            )
        }
    }
}

enum class Ability {
    STR, DEX, CON, INT, WIS, CHA
}

class AbilityScore {
    companion object {
        fun of(str: Int, dex: Int, con: Int, int: Int, wis: Int, cha: Int): Map<Ability, Int> {
            return mapOf(
                    Pair(Ability.STR, str),
                    Pair(Ability.DEX, dex),
                    Pair(Ability.CON, con),
                    Pair(Ability.INT, int),
                    Pair(Ability.WIS, wis),
                    Pair(Ability.CHA, cha)
            )
        }
    }
}

private val default = mapOf(
        Pair(Ability.STR, 10),
        Pair(Ability.DEX, 10),
        Pair(Ability.CON, 10),
        Pair(Ability.INT, 10),
        Pair(Ability.WIS, 10),
        Pair(Ability.CHA, 10)
)
