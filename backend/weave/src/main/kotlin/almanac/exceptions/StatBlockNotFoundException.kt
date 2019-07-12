package almanac.exceptions

class StatBlockNotFoundException(personId: Long)
    : RuntimeException("No Stat Block found for person with id <$personId>")
