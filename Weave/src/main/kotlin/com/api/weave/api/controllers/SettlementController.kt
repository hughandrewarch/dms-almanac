package com.api.weave.api.controllers

import com.api.weave.api.services.ApiSettlementService
import com.api.weave.api.models.SettlementPage
import com.api.weave.api.models.list.ListItem
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class SettlementController(private val service: ApiSettlementService) {

    @GetMapping("/settlements")
    fun settlements(): List<ListItem> {
        return service.findAll()
    }

    @GetMapping("/settlement/{id}")
    fun settlement(@PathVariable id: Long): SettlementPage {
        return service.find(id)
    }
}
