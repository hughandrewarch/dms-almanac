package almanac.exceptions

class PlaceNotFoundException(personId: Long)
    : RuntimeException("No person found with id <$personId>")