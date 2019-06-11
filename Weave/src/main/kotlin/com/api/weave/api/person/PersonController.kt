package com.api.weave.api.person

import com.api.weave.models.*
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class PersonController(private val service: PersonService) {

    @GetMapping("/person/{id}")
    fun person(@PathVariable id: Long): PersonPage {
        return service.findOne(id)
    }
}
