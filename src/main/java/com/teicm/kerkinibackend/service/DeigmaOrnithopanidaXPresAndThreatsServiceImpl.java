package com.teicm.kerkinibackend.service;

import com.teicm.kerkinibackend.api.v1.mapper.DeigmaOrnithopanidaXPresAndThreatsMapper;
import com.teicm.kerkinibackend.api.v1.model.DeigmaOrnithopanidaXPresAndThreatsDTO;
import com.teicm.kerkinibackend.repositories.DeigmaOrnithopanidaXPresAndThreatsRep;

import java.util.List;
import java.util.stream.Collectors;

public class DeigmaOrnithopanidaXPresAndThreatsServiceImpl implements DeigmaOrnithopanidaXPresAndThreatsService
{

    private final DeigmaOrnithopanidaXPresAndThreatsMapper deigmaOrnithopanidaXPresAndThreatsMapper;
    private final DeigmaOrnithopanidaXPresAndThreatsRep deigmaOrnithopanidaXPresAndThreatsRep;

    public DeigmaOrnithopanidaXPresAndThreatsServiceImpl(DeigmaOrnithopanidaXPresAndThreatsMapper deigmaOrnithopanidaXPresAndThreatsMapper, DeigmaOrnithopanidaXPresAndThreatsRep deigmaOrnithopanidaXPresAndThreatsRep) {
        this.deigmaOrnithopanidaXPresAndThreatsMapper = deigmaOrnithopanidaXPresAndThreatsMapper;
        this.deigmaOrnithopanidaXPresAndThreatsRep = deigmaOrnithopanidaXPresAndThreatsRep;
    }

    @Override
    public List<DeigmaOrnithopanidaXPresAndThreatsDTO> getAllDeigmata()
    {
        return deigmaOrnithopanidaXPresAndThreatsRep.findAll()
                .stream()
                .map(deigmaOrnithopanidaXPresAndThreatsMapper::deigmaOrnithopanidaXPresAndThreatsTOdeigmaOrnithopanidaXPresAndThreatsDTO)
                .collect(Collectors.toList());
    }
}
