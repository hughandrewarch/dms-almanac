package app.controllers

import app.models.RelationCreateRequest
import app.models.RelationResponse
import app.services.ApiRelationService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
class RelationController(private val service: ApiRelationService) {

    @GetMapping("/relations")
    fun relations(): List<RelationResponse> {
        return service.findAll()
    }

    @PostMapping("/relations/settlementPerson")
    @ResponseStatus(HttpStatus.CREATED)
    fun linkSettlementPerson(@Valid @RequestBody request: RelationCreateRequest): RelationResponse {
        return service.linkSettlementPerson(request)
    }
}
