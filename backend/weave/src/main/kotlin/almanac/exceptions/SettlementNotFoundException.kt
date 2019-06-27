package almanac.exceptions

import almanac.exceptions.base.BaseNotFoundException

class SettlementNotFoundException(settlementId: Long): BaseNotFoundException(settlementId, "settlement")
