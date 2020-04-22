package app.controllers

import app.models.PersonCreateRequest
import app.services.ApiPersonService
import app.models.PersonResponse
import app.models.SettlementCreateRequest
import app.models.SettlementResponse
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
class PersonController(private val service: ApiPersonService) {

    //TODO add tests
    @GetMapping("/person/{id}")
    fun person(@PathVariable id: Long): PersonResponse {
        return service.find(id)
    }

    @PostMapping("/person")
    @ResponseStatus(HttpStatus.CREATED)
    fun create(@Valid @RequestBody request: PersonCreateRequest): PersonResponse {
        return service.create(request)
    }
}
