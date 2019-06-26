package almanac.exceptions

class PersonNotFoundException(personId: Long)
    : RuntimeException("No person found with id <$personId>")