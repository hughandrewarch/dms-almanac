package almanac.models.place;

public class SettlementPlace {
    private Long settlementId;
    private Long placeId;

    public SettlementPlace(Long settlementId, Long placeId) {
        this.settlementId = settlementId;
        this.placeId = placeId;
    }

    public Long getSettlementId() {
        return settlementId;
    }

    public Long getPlaceId() {
        return placeId;
    }
}

