package com.teicm.kerkinibackend.service;

import com.teicm.kerkinibackend.Repository.DeigmaOrnithopanidaRep;
import com.teicm.kerkinibackend.api.v1.mapper.DeigmaOrnithopanidaMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DeigmaOrnithopanidaServiceImpl implements DeigmaOrnithopanidaService
{
    private DeigmaOrnithopanidaMapper deigmaOrnithopanidaMapper;

    @Autowired
    private DeigmaOrnithopanidaRep  deigmaOrnithopanidaRep;

    public DeigmaOrnithopanidaServiceImpl(DeigmaOrnithopanidaMapper deigmaOrnithopanidaMapper, DeigmaOrnithopanidaRep deigmaOrnithopanidaRep)
    {
        this.deigmaOrnithopanidaMapper = deigmaOrnithopanidaMapper;
        this.deigmaOrnithopanidaRep = deigmaOrnithopanidaRep;
    }
}
