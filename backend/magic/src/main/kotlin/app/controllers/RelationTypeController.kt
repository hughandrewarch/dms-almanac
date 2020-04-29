package app.controllers

import almanac.models.RelationType
import app.models.RelationResponse1
import app.services.ApiRelationService
import app.services.ApiRelationTypeService
import org.springframework.web.bind.annotation.*

@RestController
class RelationTypeController(private val service: ApiRelationTypeService) {

    @GetMapping("/relationTypes")
    fun findAll(): List<RelationType> {
        return service.findAll()
    }
}
