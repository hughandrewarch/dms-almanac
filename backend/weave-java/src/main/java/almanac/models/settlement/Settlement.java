package almanac.models.settlement;

public class Settlement {
    private Long id;
    private String name;
    private Long population;
    private String description;
    private SettlementType SettlementType;

    public Settlement(Long id, String name, Long population, String description, SettlementType settlementType) {
        this.id = id;
        this.name = name;
        this.population = population;
        this.description = description;
        SettlementType = settlementType;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Long getPopulation() {
        return population;
    }

    public String getDescription() {
        return description;
    }

    public almanac.models.settlement.SettlementType getSettlementType() {
        return SettlementType;
    }
}

