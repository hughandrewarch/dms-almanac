package almanac.exceptions

import almanac.exceptions.base.BaseNotFoundException

class PersonNotFoundException(personId: Long): BaseNotFoundException(personId, "person")
