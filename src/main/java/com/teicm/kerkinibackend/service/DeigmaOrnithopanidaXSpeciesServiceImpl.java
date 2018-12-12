package com.teicm.kerkinibackend.service;

import com.teicm.kerkinibackend.Repository.DeigmaOrnithopanidaXSpeciesRep;
import com.teicm.kerkinibackend.api.v1.mapper.DeigmaOrnithopanidaXSpeciesMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DeigmaOrnithopanidaXSpeciesServiceImpl implements DeigmaOrnithopanidaXSpeciesService
{
    private DeigmaOrnithopanidaXSpeciesMapper deigmaOrnithopanidaXSpeciesMapper;

    @Autowired
    private DeigmaOrnithopanidaXSpeciesRep deigmaOrnithopanidaXSpeciesRep;

    public DeigmaOrnithopanidaXSpeciesServiceImpl(DeigmaOrnithopanidaXSpeciesMapper deigmaOrnithopanidaXSpeciesMapper, DeigmaOrnithopanidaXSpeciesRep deigmaOrnithopanidaXSpeciesRep)
    {
        this.deigmaOrnithopanidaXSpeciesMapper = deigmaOrnithopanidaXSpeciesMapper;
        this.deigmaOrnithopanidaXSpeciesRep = deigmaOrnithopanidaXSpeciesRep;
    }


}
