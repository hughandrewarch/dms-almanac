package app.controllers

import app.services.ApiPersonService
import app.models.PersonResponse
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class PersonController(private val service: ApiPersonService) {

    //TODO add tests
    @GetMapping("/person/{id}")
    fun person(@PathVariable id: Long): PersonResponse {
        return service.find(id)
    }
}
