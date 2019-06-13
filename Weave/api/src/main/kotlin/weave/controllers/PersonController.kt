package weave.api.controllers

import com.api.weave.api.services.ApiPersonService
import com.api.weave.api.models.PersonPage
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class PersonController(private val service: ApiPersonService) {

    @GetMapping("/controllers/{id}")
    fun person(@PathVariable id: Long): PersonPage {
        return service.find(id)
    }
}
