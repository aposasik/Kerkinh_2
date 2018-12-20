package com.teicm.kerkinibackend.api.v1.mapper;

import com.teicm.kerkinibackend.api.v1.model.CTOrnithopanidaPressuresAndThreatsDTO;
import com.teicm.kerkinibackend.domain.Ornithopanida.CTOrnithopanidaPressuresAndThreats;
import org.springframework.stereotype.Component;

@Component
public class CTOrnithopanidaPressuresAndThreatsMapperImpl implements CTOrnithopanidaPressuresAndThreatsMapper {
    @Override
    public CTOrnithopanidaPressuresAndThreats ctOrnithopanidaPressuresAndThreatsTOctOrnithopanidaPressuresAndThreatsDTO(CTOrnithopanidaPressuresAndThreatsDTO ctOrnithopanidaPressuresAndThreatsDTO) {
        if (ctOrnithopanidaPressuresAndThreatsDTO == null) {
            return null;
        }

        CTOrnithopanidaPressuresAndThreats ctOrnithopanidaPressuresAndThreats = new CTOrnithopanidaPressuresAndThreats();
        ctOrnithopanidaPressuresAndThreats.setActcode(ctOrnithopanidaPressuresAndThreatsDTO.getActcode());
        ctOrnithopanidaPressuresAndThreats.setDescripten(ctOrnithopanidaPressuresAndThreatsDTO.getDescripten());
        ctOrnithopanidaPressuresAndThreats.setRemarks(ctOrnithopanidaPressuresAndThreatsDTO.getRemarks());

        return ctOrnithopanidaPressuresAndThreats;

}



    @Override
    public CTOrnithopanidaPressuresAndThreatsDTO ctOrnithopanidaPressuresAndThreatsDTOTOctOrnithopanidaPressuresAndThreats(CTOrnithopanidaPressuresAndThreats ctOrnithopanidaPressuresAndThreats) {
        if (ctOrnithopanidaPressuresAndThreats == null) {
            return null;
        }
        CTOrnithopanidaPressuresAndThreatsDTO ctOrnithopanidaPressuresAndThreatsDTO = new CTOrnithopanidaPressuresAndThreatsDTO();
        ctOrnithopanidaPressuresAndThreatsDTO.setActcode(ctOrnithopanidaPressuresAndThreats.getActcode());
        ctOrnithopanidaPressuresAndThreatsDTO.setDescripten(ctOrnithopanidaPressuresAndThreats.getDescripten());
        ctOrnithopanidaPressuresAndThreatsDTO.setRemarks(ctOrnithopanidaPressuresAndThreats.getRemarks());

        return ctOrnithopanidaPressuresAndThreatsDTO;

    }
}


