package com.teicm.kerkinibackend.controllers.v1;

import com.teicm.kerkinibackend.api.v1.model.DeigmaOrnithopanidaXPresAndThreatsListDTO;
import com.teicm.kerkinibackend.service.DeigmaOrnithopanidaXPresAndThreatsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/v1/deigmaeidhPnTList")
public class DeigmaOrnithopanidaXPresAndThreatsController
{
    private final DeigmaOrnithopanidaXPresAndThreatsService deigmaOrnithopanidaXPresAndThreatsService;

    public DeigmaOrnithopanidaXPresAndThreatsController(DeigmaOrnithopanidaXPresAndThreatsService deigmaOrnithopanidaXPresAndThreatsService)
    {
        this.deigmaOrnithopanidaXPresAndThreatsService = deigmaOrnithopanidaXPresAndThreatsService;
    }

    @GetMapping
    public ResponseEntity<DeigmaOrnithopanidaXPresAndThreatsListDTO> getAllDeigmata()
    {
        return new ResponseEntity<DeigmaOrnithopanidaXPresAndThreatsListDTO>
                (new DeigmaOrnithopanidaXPresAndThreatsListDTO
                        (deigmaOrnithopanidaXPresAndThreatsService.getAllDeigmata()), HttpStatus.OK);
    }
}
