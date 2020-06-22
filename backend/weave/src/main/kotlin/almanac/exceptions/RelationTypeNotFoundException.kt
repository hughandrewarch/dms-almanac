package almanac.exceptions

import java.lang.RuntimeException

open class RelationTypeNotFoundException: RuntimeException {
    constructor(relationTypeName: String): super(getError(relationTypeName))
    constructor(relationTypeId: Long): super(getError(relationTypeId))
}

private fun getError(relationTypeId: Long): String {
    return "No relationType found with id <$relationTypeId>"
}

private fun getError(relationTypeName: String): String {
    return "No relationType found with name '$relationTypeName'"
}
