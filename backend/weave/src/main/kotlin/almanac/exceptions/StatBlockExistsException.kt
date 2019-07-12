package almanac.exceptions

class StatBlockExistsException(personId: Long)
    : RuntimeException("Stat Block for person with id <$personId> already exists")
