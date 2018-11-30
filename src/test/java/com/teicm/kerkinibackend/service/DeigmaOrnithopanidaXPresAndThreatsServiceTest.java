package com.teicm.kerkinibackend.service;

import com.teicm.kerkinibackend.api.v1.mapper.DeigmaOrnithopanidaXPresAndThreatsMapper;
import com.teicm.kerkinibackend.api.v1.model.DeigmaOrnithopanidaXPresAndThreatsDTO;
import com.teicm.kerkinibackend.domain.Ornithopanida.DeigmaOrnithopanidaXPresAndThreats;
import com.teicm.kerkinibackend.Repository.DeigmaOrnithopanidaXPresAndThreatsRep;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.junit.Assert.assertEquals;

public class DeigmaOrnithopanidaXPresAndThreatsServiceTest
{
    public static final Long ID= 2L;
    public static final String RLV ="Petros";
    public static final String ACT ="Petrou";
    public static final String Typ ="LIKE";
    public static final String Impo ="AUTA";

    DeigmaOrnithopanidaXPresAndThreatsService deigmaOrnithopanidaXPresAndThreatsService;

    @Mock
    DeigmaOrnithopanidaXPresAndThreatsRep deigmaOrnithopanidaXPresAndThreatsRep;

    @Before
    public void setUp() throws Exception
    {
        MockitoAnnotations.initMocks(this);

        deigmaOrnithopanidaXPresAndThreatsService = new DeigmaOrnithopanidaXPresAndThreatsServiceImpl(DeigmaOrnithopanidaXPresAndThreatsMapper.INSTANCE, deigmaOrnithopanidaXPresAndThreatsRep);
    }

    @Test
    public void getAllDeigmata() throws Exception
    {
        //given
        List<DeigmaOrnithopanidaXPresAndThreats> deigmaOrnithopanidaXPresAndThreats = Arrays.asList(new DeigmaOrnithopanidaXPresAndThreats(),new DeigmaOrnithopanidaXPresAndThreats(),new DeigmaOrnithopanidaXPresAndThreats(),new DeigmaOrnithopanidaXPresAndThreats(),new DeigmaOrnithopanidaXPresAndThreats());

        when(deigmaOrnithopanidaXPresAndThreatsRep.findAll()).thenReturn(deigmaOrnithopanidaXPresAndThreats);

        //when
        List<DeigmaOrnithopanidaXPresAndThreatsDTO> deigmaOrnithopanidaXPresAndThreatsDTOS = deigmaOrnithopanidaXPresAndThreatsService.getAllDeigmata();

        //then
        assertEquals(5,deigmaOrnithopanidaXPresAndThreatsDTOS.size());
    }

}