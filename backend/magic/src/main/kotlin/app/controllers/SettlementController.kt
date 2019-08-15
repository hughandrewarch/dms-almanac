package app.controllers

import app.models.SettlementCreateRequest
import app.services.ApiSettlementService
import app.models.SettlementResponse
import app.models.list.ListItem
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

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

    @PostMapping("/settlement")
    @ResponseStatus(HttpStatus.CREATED)
    fun create(@Valid @RequestBody request: SettlementCreateRequest): SettlementResponse {
        return service.create(request)
    }
}
