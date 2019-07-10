package app.controllers

import app.services.ApiSettlementService
import app.models.SettlementResponse
import app.models.list.ListItem
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class SettlementController(private val service: ApiSettlementService) {

    //TODO add tests
    @GetMapping("/settlements")
    fun settlements(): List<ListItem> {
        return service.findAll()
    }

    @GetMapping("/settlement/{id}")
    fun settlement(@PathVariable id: Long): SettlementResponse {
        return service.find(id)
    }
}
