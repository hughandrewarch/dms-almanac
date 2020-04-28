package almanac.exceptions

class RelationTypeAlreadyExistsException(relationTypeName: String)
    : RuntimeException("Relation Type <$relationTypeName> already exists")
