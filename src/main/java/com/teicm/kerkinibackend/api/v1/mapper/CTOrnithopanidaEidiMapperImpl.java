package com.teicm.kerkinibackend.api.v1.mapper;

import com.teicm.kerkinibackend.api.v1.model.CTOrnithopanidaEidiDTO;
import com.teicm.kerkinibackend.domain.Ornithopanida.CTOrnithopanidaEidi;
import org.springframework.stereotype.Component;

@Component
public class CTOrnithopanidaEidiMapperImpl  implements CTOrnithopanidaEidiMapper
{
    @Override
    public CTOrnithopanidaEidi ctOrnithopanidaEidiTOctOrnithopanidaEidiDTO(CTOrnithopanidaEidiDTO ctOrnithopanidaEidiDTO) {
        if (ctOrnithopanidaEidiDTO == null) {
            return null;
        }

        CTOrnithopanidaEidi ctOrnithopanidaEidi = new CTOrnithopanidaEidi();
        ctOrnithopanidaEidi.setKodikoseidos(ctOrnithopanidaEidiDTO.getKodikoseidos());

        return ctOrnithopanidaEidi;

    }
    @Override
    public CTOrnithopanidaEidiDTO ctOrnithopanidaEidiDTOTOctOrnithopanidaEidi(CTOrnithopanidaEidi ctOrnithopanidaEidi) {
        if (ctOrnithopanidaEidi == null) {
            return null;
        }
        CTOrnithopanidaEidiDTO ctOrnithopanidaEidiDTO = new CTOrnithopanidaEidiDTO();
        ctOrnithopanidaEidiDTO.setKodikoseidos(ctOrnithopanidaEidi.getKodikoseidos());

        return ctOrnithopanidaEidiDTO;

    }
}
