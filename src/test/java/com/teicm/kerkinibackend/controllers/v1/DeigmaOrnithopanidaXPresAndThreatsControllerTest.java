package com.teicm.kerkinibackend.controllers.v1;

import com.teicm.kerkinibackend.api.v1.model.DeigmaOrnithopanidaXPresAndThreatsDTO;
import com.teicm.kerkinibackend.service.DeigmaOrnithopanidaXPresAndThreatsService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class DeigmaOrnithopanidaXPresAndThreatsControllerTest
{

    public static final Long ID= 1L;
    public static final String RLV ="Petros";
    public static final String ACT ="Petrou";
    public static final String Typ ="LIKE";
    public static final String Impo ="AUTA";

    @Mock
    DeigmaOrnithopanidaXPresAndThreatsService deigmaOrnithopanidaXPresAndThreatsService;

    @InjectMocks
    DeigmaOrnithopanidaXPresAndThreatsController deigmaOrnithopanidaXPresAndThreatsController;

    MockMvc mockMvc;
    @Before
    public void setUp() throws Exception
    {
        MockitoAnnotations.initMocks(this);

       mockMvc = MockMvcBuilders.standaloneSetup(deigmaOrnithopanidaXPresAndThreatsController).build();
    }

    @Test
    public void TestDeigmata() throws Exception
    {
        DeigmaOrnithopanidaXPresAndThreatsDTO deigmaOrnithopanidaXPresAndThreatsDTO1 =
                new DeigmaOrnithopanidaXPresAndThreatsDTO();
        deigmaOrnithopanidaXPresAndThreatsDTO1.setReleve_NR(RLV);
        deigmaOrnithopanidaXPresAndThreatsDTO1.setACT_Code(ACT);
        deigmaOrnithopanidaXPresAndThreatsDTO1.setType(Typ);
        deigmaOrnithopanidaXPresAndThreatsDTO1.setImportance(Impo);
        deigmaOrnithopanidaXPresAndThreatsDTO1.setKodikos(ID);

        DeigmaOrnithopanidaXPresAndThreatsDTO deigmaOrnithopanidaXPresAndThreatsDTO2 =
                new DeigmaOrnithopanidaXPresAndThreatsDTO();
        deigmaOrnithopanidaXPresAndThreatsDTO2.setReleve_NR("Mariosa");
        deigmaOrnithopanidaXPresAndThreatsDTO2.setACT_Code("Mikonos");
        deigmaOrnithopanidaXPresAndThreatsDTO2.setType("Idos");
        deigmaOrnithopanidaXPresAndThreatsDTO2.setImportance("Lock");
        deigmaOrnithopanidaXPresAndThreatsDTO2.setKodikos(2L);

        List<DeigmaOrnithopanidaXPresAndThreatsDTO> deigmaOrnithopanidaXPresAndThreats =
                Arrays.asList(deigmaOrnithopanidaXPresAndThreatsDTO1,deigmaOrnithopanidaXPresAndThreatsDTO2);

        when(deigmaOrnithopanidaXPresAndThreatsService.getAllDeigmata()).thenReturn(deigmaOrnithopanidaXPresAndThreats);

        mockMvc.perform(get("/api/vi/deigmaeidhPnTList/").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.deigmaeidhPnTList", hasSize(2)));
    }

}