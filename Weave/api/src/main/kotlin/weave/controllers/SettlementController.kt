package weave.controllers

import weave.services.ApiSettlementService
import weave.models.SettlementPage
import weave.models.list.ListItem
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
