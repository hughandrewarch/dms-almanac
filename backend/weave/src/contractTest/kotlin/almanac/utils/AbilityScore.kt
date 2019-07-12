package almanac.utils

import almanac.models.Ability

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
