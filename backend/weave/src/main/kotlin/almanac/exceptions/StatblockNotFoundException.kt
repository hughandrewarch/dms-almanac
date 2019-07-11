package almanac.exceptions

class StatblockNotFoundException(personId: Long)
    : RuntimeException("No statblock found for person with id <$personId>")
