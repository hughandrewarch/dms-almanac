package almanac.exceptions

import almanac.exceptions.base.BaseNotFoundException

class PlaceNotFoundException(placeId: Long): BaseNotFoundException(placeId, "place")
