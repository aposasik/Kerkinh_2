package com.teicm.kerkinibackend.controllers.v1;

import com.teicm.kerkinibackend.domain.Ornithopanida.CTOrnithopanidaPressuresAndThreats;
import com.teicm.kerkinibackend.service.CTOrnithopanidaPressuresAndThreatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/ctornithopanidaPressuresAndThreats")
  public class CTOrnithopanidaPressuresAndThreatsController
  {
     @Autowired
     private CTOrnithopanidaPressuresAndThreatsService ctOrnithopanidaPressuresAndThreatsService;

     public CTOrnithopanidaPressuresAndThreatsController(CTOrnithopanidaPressuresAndThreatsService ctOrnithopanidaPressuresAndThreatsService)
     {
            this.ctOrnithopanidaPressuresAndThreatsService = ctOrnithopanidaPressuresAndThreatsService;
     }


     @GetMapping
     @ResponseStatus(HttpStatus.OK)
     public List<CTOrnithopanidaPressuresAndThreats> findAll()
     {
        return ctOrnithopanidaPressuresAndThreatsService.findAll();
     }
  }

