package com.api.weave.controllers

import com.api.weave.models.Town
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TownController {

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/towns")
    fun towns() =
            listOf(
                    Town(1, "Hughan"),
                    Town(2, "Amberlea"),
                    Town(3, "Roseport"),
                    Town(4, "Elkshorn")
            )

}