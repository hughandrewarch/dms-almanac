package almanac.exceptions

class SettlementNotFoundException(SettlementId: Long)
    : RuntimeException("No Settlement found with id <$SettlementId>")