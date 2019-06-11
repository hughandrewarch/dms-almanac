package com.api.weave.api.town

import com.api.weave.models.TownPage
import com.api.weave.models.list.ListItem
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class TownController(private val service: TownService) {

    @GetMapping("/towns")
    fun towns(): List<ListItem> {
        return service.listTowns()
    }

    @GetMapping("/town/{id}")
    fun towns(@PathVariable id: Long): TownPage {
        return service.findOne(id)
    }
}
