package app.controllers

import app.models.RelationResponse
import app.services.ApiRelationService
import org.springframework.web.bind.annotation.*

@RestController
class RelationController(private val service: ApiRelationService) {

    @GetMapping("/relations")
    fun settlements(): List<RelationResponse> {
        return service.findAll()
    }
}
