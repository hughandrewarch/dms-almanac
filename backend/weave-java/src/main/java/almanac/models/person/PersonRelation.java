package almanac.models.person;

public class PersonRelation {
    private Long personId;
    private PersonRelationType relation;
    private Long relationId;

    public PersonRelation(Long personId, PersonRelationType relation, Long relationId) {
        this.personId = personId;
        this.relation = relation;
        this.relationId = relationId;
    }

    public Long getPersonId() {
        return personId;
    }

    public PersonRelationType getRelation() {
        return relation;
    }

    public Long getRelationId() {
        return relationId;
    }
}

