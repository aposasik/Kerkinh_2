package com.teicm.kerkinibackend.api.v1.mapper;

import com.teicm.kerkinibackend.api.v1.model.DeigmaOrnithopanidaDTO;
import com.teicm.kerkinibackend.domain.Ornithopanida.DeigmaOrnithopanida;

public interface DeigmaOrnithopanidaMapper
{
    DeigmaOrnithopanida deigmaOrnithopanidaTOdeigmaOrnithopanidaDTO(DeigmaOrnithopanidaDTO deigmaOrnithopanidaDTO);
    DeigmaOrnithopanidaDTO deigmaOrnithopanidaDTOTOdeigmaOrnithopanida(DeigmaOrnithopanida deigmaOrnithopanida);
}

