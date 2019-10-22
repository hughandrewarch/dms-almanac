package almanac.models.person;

public class Person {
    private Long id;
    private String name;
    private String race;
    private String description;

    public Person(Long id, String name, String race, String description) {
        this.id = id;
        this.name = name;
        this.race = race;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRace() {
        return race;
    }

    public String getDescription() {
        return description;
    }
}

