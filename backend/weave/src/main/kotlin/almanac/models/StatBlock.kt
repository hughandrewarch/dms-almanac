package almanac.models

data class StatBlock(
        val id: Long,
        val abilityScores: Map<Ability, Int> = default
)

enum class Ability {
    STR, DEX, CON, INT, WIS, CHA
}

private val default = mapOf(
        Pair(Ability.STR, 10),
        Pair(Ability.DEX, 10),
        Pair(Ability.CON, 10),
        Pair(Ability.INT, 10),
        Pair(Ability.WIS, 10),
        Pair(Ability.CHA, 10)
)