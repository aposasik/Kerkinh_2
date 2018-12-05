/*package com.teicm.kerkinibackend.api.v1.mapper;

import com.teicm.kerkinibackend.api.v1.model.DeigmaOrnithopanidaXPresAndThreatsDTO;
import com.teicm.kerkinibackend.domain.Ornithopanida.DeigmaOrnithopanidaXPresAndThreats;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class DeigmaOrnithopanidaXPresAndThreatsMapperTest
{
    public static final Long ID= 1L;
    public static final String RLV ="Marios";
    public static final String ACT ="Kala";
    public static final String Typ ="OK";
    public static final String Impo ="ETSI";

    DeigmaOrnithopanidaXPresAndThreatsMapper deigmaOrnithopanidaXPresAndThreatsMapper = DeigmaOrnithopanidaXPresAndThreatsMapper.INSTANCE;

    @Test
    public void deigmaOrnithopanidaXPresAndThreatsTOdeigmaOrnithopanidaXPresAndThreatsDTO() throws Exception
    {
        //given
        DeigmaOrnithopanidaXPresAndThreats deigmaOrnithopanidaXPresAndThreats = new DeigmaOrnithopanidaXPresAndThreats();
        deigmaOrnithopanidaXPresAndThreats.setReleve_NR(RLV);
        deigmaOrnithopanidaXPresAndThreats.setACT_Code(ACT);
        deigmaOrnithopanidaXPresAndThreats.setType(Typ);
        deigmaOrnithopanidaXPresAndThreats.setImportance(Impo);
        deigmaOrnithopanidaXPresAndThreats.setKodikos(ID);

        //when
        DeigmaOrnithopanidaXPresAndThreatsDTO deigmaOrnithopanidaXPresAndThreatsDTO = deigmaOrnithopanidaXPresAndThreatsMapper.deigmaOrnithopanidaXPresAndThreatsTOdeigmaOrnithopanidaXPresAndThreatsDTO(deigmaOrnithopanidaXPresAndThreats);

        //then
        assertEquals(Long.valueOf(ID), deigmaOrnithopanidaXPresAndThreatsDTO.getKodikos());
        assertEquals(RLV, deigmaOrnithopanidaXPresAndThreatsDTO.getReleve_NR());
        assertEquals(ACT, deigmaOrnithopanidaXPresAndThreatsDTO.getACT_Code());
        assertEquals(Typ, deigmaOrnithopanidaXPresAndThreatsDTO.getType());
        assertEquals(Impo, deigmaOrnithopanidaXPresAndThreatsDTO.getImportance());

    }

}*/