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
        ctOrnithopanidaPressuresAndThreats.setActcode(ctOrnithopanidaPressuresAndThreatsDTO.getACT_Code());
        ctOrnithopanidaPressuresAndThreats.setDescripten(ctOrnithopanidaPressuresAndThreatsDTO.getDescriptEN());
        ctOrnithopanidaPressuresAndThreats.setRemarks(ctOrnithopanidaPressuresAndThreatsDTO.getRemarks());

        return ctOrnithopanidaPressuresAndThreats;

}



    @Override
    public CTOrnithopanidaPressuresAndThreatsDTO ctOrnithopanidaPressuresAndThreatsDTOTOctOrnithopanidaPressuresAndThreats(CTOrnithopanidaPressuresAndThreats ctOrnithopanidaPressuresAndThreats) {
        if (ctOrnithopanidaPressuresAndThreats == null) {
            return null;
        }
        CTOrnithopanidaPressuresAndThreatsDTO ctOrnithopanidaPressuresAndThreatsDTO = new CTOrnithopanidaPressuresAndThreatsDTO();
        ctOrnithopanidaPressuresAndThreatsDTO.setACT_Code(ctOrnithopanidaPressuresAndThreats.getActcode());
        ctOrnithopanidaPressuresAndThreatsDTO.setDescriptEN(ctOrnithopanidaPressuresAndThreats.getDescripten());
        ctOrnithopanidaPressuresAndThreatsDTO.setRemarks(ctOrnithopanidaPressuresAndThreats.getRemarks());

        return ctOrnithopanidaPressuresAndThreatsDTO;

    }
}


