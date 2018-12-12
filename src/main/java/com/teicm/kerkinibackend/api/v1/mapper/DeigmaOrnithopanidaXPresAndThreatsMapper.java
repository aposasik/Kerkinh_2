package com.teicm.kerkinibackend.api.v1.mapper;


import com.teicm.kerkinibackend.api.v1.model.DeigmaOrnithopanidaXPresAndThreatsDTO;
import com.teicm.kerkinibackend.domain.Ornithopanida.DeigmaOrnithopanidaXPresAndThreats;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

//@Mapper

public interface DeigmaOrnithopanidaXPresAndThreatsMapper
{
    // DeigmaOrnithopanidaXPresAndThreatsMapper INSTANCE = Mappers.getMapper(DeigmaOrnithopanidaXPresAndThreatsMapper.class);

    DeigmaOrnithopanidaXPresAndThreats deigmaOrnithopanidaXPresAndThreatsTOdeigmaOrnithopanidaXPresAndThreatsDTO(DeigmaOrnithopanidaXPresAndThreatsDTO deigmaOrnithopanidaXPresAndThreatsDTO);

    DeigmaOrnithopanidaXPresAndThreatsDTO deigmaOrnithopanidaXPresAndThreatsDTOTOdeigmaOrnithopanidaXPresAndThreats(DeigmaOrnithopanidaXPresAndThreats deigmaOrnithopanidaXPresAndThreats);

}
