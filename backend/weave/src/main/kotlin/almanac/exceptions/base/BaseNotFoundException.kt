package almanac.exceptions.base

//TODO change over all usage to use just this? instead of extending?
open class BaseNotFoundException(id: Long, name: String)
    : RuntimeException("No $name found with id <$id>")