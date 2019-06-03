package com.api.weave.controllers

import com.api.weave.models.Town
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

//@CrossOrigin(origins = ["http://localhost:3000"])
@RestController
class TownController {

    @GetMapping("/towns")
    fun towns() =
            listOf(
                    Town(1, "Hughan"),
                    Town(2, "Amberlea"),
                    Town(3, "Roseport"),
                    Town(4, "Elkshorn")
            )

}