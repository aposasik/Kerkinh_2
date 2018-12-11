package com.teicm.kerkinibackend.controllers.v1;

import com.teicm.kerkinibackend.domain.Ornithopanida.DeigmaOrnithopanidaXPresAndThreats;
import com.teicm.kerkinibackend.service.DeigmaOrnithopanidaXPresAndThreatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/deigmaOrnithopanidaXPresAndThreats")
public class DeigmaOrnithopanidaXPresAndThreatsController
{
    @Autowired
    private  DeigmaOrnithopanidaXPresAndThreatsService deigmaOrnithopanidaXPresAndThreatsService;

    public DeigmaOrnithopanidaXPresAndThreatsController(DeigmaOrnithopanidaXPresAndThreatsService deigmaOrnithopanidaXPresAndThreatsService)
    {
        this.deigmaOrnithopanidaXPresAndThreatsService = deigmaOrnithopanidaXPresAndThreatsService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<DeigmaOrnithopanidaXPresAndThreats> findAll()
    {
         return deigmaOrnithopanidaXPresAndThreatsService.findAll();
    }
}
