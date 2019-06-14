package weave.controllers

import weave.services.ApiPersonService
import weave.models.PersonPage
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class PersonController(private val service: ApiPersonService) {

    @GetMapping("/person/{id}")
    fun person(@PathVariable id: Long): PersonPage {
        return service.find(id)
    }
}
