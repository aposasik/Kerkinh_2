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

        deigmaOrnithopanidaXPresAndThreats.setRelevenr(deigmaOrnithopanidaXPresAndThreatsDTO.getReleve_NR());
        deigmaOrnithopanidaXPresAndThreats.setActcode(deigmaOrnithopanidaXPresAndThreatsDTO.getACT_Code());
        deigmaOrnithopanidaXPresAndThreats.setType(deigmaOrnithopanidaXPresAndThreatsDTO.getType());
        deigmaOrnithopanidaXPresAndThreats.setImportance(deigmaOrnithopanidaXPresAndThreatsDTO.getImportance());
        deigmaOrnithopanidaXPresAndThreats.setKodikos(deigmaOrnithopanidaXPresAndThreatsDTO.getKodikos());

        return deigmaOrnithopanidaXPresAndThreats;
    }

    @Override
    public DeigmaOrnithopanidaXPresAndThreatsDTO deigmaOrnithopanidaXPresAndThreatsDTOTOdeigmaOrnithopanidaXPresAndThreats(DeigmaOrnithopanidaXPresAndThreats deigmaOrnithopanidaXPresAndThreats) {
        if ( deigmaOrnithopanidaXPresAndThreats == null ) {
            return null;
        }

        DeigmaOrnithopanidaXPresAndThreatsDTO deigmaOrnithopanidaXPresAndThreatsDTO = new DeigmaOrnithopanidaXPresAndThreatsDTO();

        deigmaOrnithopanidaXPresAndThreatsDTO.setDeigmaornithopanidaID(deigmaOrnithopanidaXPresAndThreats.getDeigmaOrnithopanida().getId());
        deigmaOrnithopanidaXPresAndThreatsDTO.setKodikos( deigmaOrnithopanidaXPresAndThreats.getKodikos() );
        deigmaOrnithopanidaXPresAndThreatsDTO.setReleve_NR( deigmaOrnithopanidaXPresAndThreats.getRelevenr() );
        deigmaOrnithopanidaXPresAndThreatsDTO.setACT_Code( deigmaOrnithopanidaXPresAndThreats.getCtornithopanidaPressuresAndThreats().getActcode());
        deigmaOrnithopanidaXPresAndThreatsDTO.setType( deigmaOrnithopanidaXPresAndThreats.getType() );
        deigmaOrnithopanidaXPresAndThreatsDTO.setImportance( deigmaOrnithopanidaXPresAndThreats.getImportance() );

        return deigmaOrnithopanidaXPresAndThreatsDTO;
    }
}

