package com.teicm.kerkinibackend.service;

import com.teicm.kerkinibackend.Repository.CTOrnithopanidaEidiRep;
import com.teicm.kerkinibackend.api.v1.mapper.CTOrnithopanidaEidiMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CTOrnithopanidaEidiServiceImpl implements CTOrnithopanidaEidiService
{

    private CTOrnithopanidaEidiMapper ctOrnithopanidaEidiMapper;

    @Autowired
    private CTOrnithopanidaEidiRep ctOrnithopanidaEidiRep;

    public CTOrnithopanidaEidiServiceImpl(CTOrnithopanidaEidiMapper ctOrnithopanidaEidiMapper, CTOrnithopanidaEidiRep ctOrnithopanidaEidiRep)
    {
        this.ctOrnithopanidaEidiMapper = ctOrnithopanidaEidiMapper;
        this.ctOrnithopanidaEidiRep = ctOrnithopanidaEidiRep;
    }
}
