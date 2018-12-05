package com.teicm.kerkinibackend.service;

import com.teicm.kerkinibackend.api.v1.model.DeigmaOrnithopanidaXPresAndThreatsDTO;

import com.teicm.kerkinibackend.domain.Ornithopanida.DeigmaOrnithopanidaXPresAndThreats;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface DeigmaOrnithopanidaXPresAndThreatsService
{
    List<DeigmaOrnithopanidaXPresAndThreats> findAll();
}
