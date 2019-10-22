package almanac.models.place;

public class Place {
    private Long id;
    private String name;
    private String description;
    private PlaceType type;

    public Place(Long id, String name, String description, PlaceType type) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public PlaceType getType() {
        return type;
    }
}

