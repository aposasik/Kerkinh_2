package com.teicm.kerkinibackend.service;


import com.teicm.kerkinibackend.Repository.CTOrnithopanidaPressuresAndThreatsRep;
import com.teicm.kerkinibackend.api.v1.mapper.CTOrnithopanidaPressuresAndThreatsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CTOrnithopanidaPressuresAndThreatsServiceImpl implements CTOrnithopanidaPressuresAndThreatsService
{
    private CTOrnithopanidaPressuresAndThreatsMapper ctOrnithopanidaPressuresAndThreatsMapper;

    @Autowired
    private CTOrnithopanidaPressuresAndThreatsRep ctOrnithopanidaPressuresAndThreatsRep;

    public CTOrnithopanidaPressuresAndThreatsServiceImpl(CTOrnithopanidaPressuresAndThreatsMapper ctOrnithopanidaPressuresAndThreatsMapper, CTOrnithopanidaPressuresAndThreatsRep ctOrnithopanidaPressuresAndThreatsRep)
    {
        this.ctOrnithopanidaPressuresAndThreatsMapper = ctOrnithopanidaPressuresAndThreatsMapper;
        this.ctOrnithopanidaPressuresAndThreatsRep = ctOrnithopanidaPressuresAndThreatsRep;
    }
}
