package com.teicm.kerkinibackend.service;

import com.teicm.kerkinibackend.api.v1.mapper.DeigmaOrnithopanidaXPresAndThreatsMapper;
import com.teicm.kerkinibackend.api.v1.model.DeigmaOrnithopanidaXPresAndThreatsDTO;
import com.teicm.kerkinibackend.Repository.DeigmaOrnithopanidaXPresAndThreatsRep;
import com.teicm.kerkinibackend.domain.Ornithopanida.DeigmaOrnithopanidaXPresAndThreats;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class DeigmaOrnithopanidaXPresAndThreatsServiceImpl implements DeigmaOrnithopanidaXPresAndThreatsService
{

    private DeigmaOrnithopanidaXPresAndThreatsMapper deigmaOrnithopanidaXPresAndThreatsMapper;

    @Autowired
    private DeigmaOrnithopanidaXPresAndThreatsRep deigmaOrnithopanidaXPresAndThreatsRep;

    public DeigmaOrnithopanidaXPresAndThreatsServiceImpl(DeigmaOrnithopanidaXPresAndThreatsMapper deigmaOrnithopanidaXPresAndThreatsMapper, DeigmaOrnithopanidaXPresAndThreatsRep deigmaOrnithopanidaXPresAndThreatsRep) {
        this.deigmaOrnithopanidaXPresAndThreatsMapper = deigmaOrnithopanidaXPresAndThreatsMapper;
        this.deigmaOrnithopanidaXPresAndThreatsRep = deigmaOrnithopanidaXPresAndThreatsRep;
    }

    @Override
    public List<DeigmaOrnithopanidaXPresAndThreats> findAll()
    {
        return deigmaOrnithopanidaXPresAndThreatsRep.findAll();

    }

}