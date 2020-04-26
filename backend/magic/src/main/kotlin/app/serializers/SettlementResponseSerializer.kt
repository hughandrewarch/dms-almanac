package app.serializers

import app.models.SettlementResponse
import almanac.models.Settlement
import org.springframework.stereotype.Component

@Component
class SettlementResponseSerializer {
    fun serialize(settlement: Settlement): SettlementResponse {
        return SettlementResponse(
                settlement = settlement
        )
    }
}