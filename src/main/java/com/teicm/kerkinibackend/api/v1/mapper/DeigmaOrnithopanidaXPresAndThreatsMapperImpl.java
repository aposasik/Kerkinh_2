package com.teicm.kerkinibackend.api.v1.mapper;

import com.teicm.kerkinibackend.api.v1.model.DeigmaOrnithopanidaXPresAndThreatsDTO;
import com.teicm.kerkinibackend.domain.Ornithopanida.DeigmaOrnithopanidaXPresAndThreats;
import org.springframework.stereotype.Component;

@Component
public class DeigmaOrnithopanidaXPresAndThreatsMapperImpl implements DeigmaOrnithopanidaXPresAndThreatsMapper
{
    @Override
    public DeigmaOrnithopanidaXPresAndThreats deigmaOrnithopanidaXPresAndThreatsTOdeigmaOrnithopanidaXPresAndThreatsDTO(DeigmaOrnithopanidaXPresAndThreatsDTO deigmaOrnithopanidaXPresAndThreatsDTO)
    {
        if (deigmaOrnithopanidaXPresAndThreatsDTO == null) {
            return null;
        }
        DeigmaOrnithopanidaXPresAndThreats deigmaOrnithopanidaXPresAndThreats = new DeigmaOrnithopanidaXPresAndThreats();
        deigmaOrnithopanidaXPresAndThreats.setReleve_NR(deigmaOrnithopanidaXPresAndThreatsDTO.getReleve_NR());
        deigmaOrnithopanidaXPresAndThreats.setACT_Code(deigmaOrnithopanidaXPresAndThreatsDTO.getACT_Code());
        deigmaOrnithopanidaXPresAndThreats.setType(deigmaOrnithopanidaXPresAndThreatsDTO.getType());
        deigmaOrnithopanidaXPresAndThreats.setImportance(deigmaOrnithopanidaXPresAndThreatsDTO.getImportance());
        deigmaOrnithopanidaXPresAndThreats.setKodikos(deigmaOrnithopanidaXPresAndThreatsDTO.getKodikos());

        return deigmaOrnithopanidaXPresAndThreats;
    }
}

