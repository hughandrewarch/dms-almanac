package com.api.weave.api.controllers

import com.api.weave.api.services.ApiTownService
import com.api.weave.api.models.TownPage
import com.api.weave.api.models.list.ListItem
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class TownController(private val service: ApiTownService) {

    @GetMapping("/towns")
    fun towns(): List<ListItem> {
        return service.findAll()
    }

    @GetMapping("/town/{id}")
    fun town(@PathVariable id: Long): TownPage {
        return service.find(id)
    }
}
