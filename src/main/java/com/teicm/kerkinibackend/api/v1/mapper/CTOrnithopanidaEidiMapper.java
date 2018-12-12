package com.teicm.kerkinibackend.api.v1.mapper;

import com.teicm.kerkinibackend.api.v1.model.CTOrnithopanidaEidiDTO;
import com.teicm.kerkinibackend.domain.Ornithopanida.CTOrnithopanidaEidi;

public interface CTOrnithopanidaEidiMapper
{
    CTOrnithopanidaEidi ctOrnithopanidaEidiTOctOrnithopanidaEidiDTO(CTOrnithopanidaEidiDTO ctOrnithopanidaEidiDTO);
    CTOrnithopanidaEidiDTO ctOrnithopanidaEidiDTOTOctOrnithopanidaEidi(CTOrnithopanidaEidi ctOrnithopanidaEidi);
}
