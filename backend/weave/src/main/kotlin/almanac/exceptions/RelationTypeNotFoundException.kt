package almanac.exceptions

import almanac.exceptions.base.BaseNotFoundException

class RelationTypeNotFoundException(relationTypeId: Long): BaseNotFoundException(relationTypeId, "relationType")
