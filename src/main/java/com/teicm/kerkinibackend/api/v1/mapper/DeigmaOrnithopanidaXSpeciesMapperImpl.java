package com.teicm.kerkinibackend.api.v1.mapper;

import com.teicm.kerkinibackend.api.v1.model.DeigmaOrnithopanidaXSpeciesDTO;
import com.teicm.kerkinibackend.domain.Ornithopanida.DeigmaOrnithopanidaXSpecies;
import org.springframework.stereotype.Component;

@Component
public class DeigmaOrnithopanidaXSpeciesMapperImpl implements DeigmaOrnithopanidaXSpeciesMapper{
    @Override
    public DeigmaOrnithopanidaXSpecies deigmaOrnithopanidaXSpeciesTOdeigmaOrnithopanidaXSpeciesDTO(DeigmaOrnithopanidaXSpeciesDTO deigmaOrnithopanidaXSpeciesDTO)
    {
        if (deigmaOrnithopanidaXSpeciesDTO == null) {
            return null;
        }
        DeigmaOrnithopanidaXSpecies deigmaOrnithopanidaXSpecies = new DeigmaOrnithopanidaXSpecies();

        deigmaOrnithopanidaXSpecies.setAadeigmatos(deigmaOrnithopanidaXSpeciesDTO.getAadeigmatos());
        deigmaOrnithopanidaXSpecies.setOra(deigmaOrnithopanidaXSpeciesDTO.getOra());
        deigmaOrnithopanidaXSpecies.setXegsa(deigmaOrnithopanidaXSpeciesDTO.getXegsa());
        deigmaOrnithopanidaXSpecies.setYegsa(deigmaOrnithopanidaXSpeciesDTO.getYegsa());
        deigmaOrnithopanidaXSpecies.setFulo(deigmaOrnithopanidaXSpeciesDTO.getFulo());
        deigmaOrnithopanidaXSpecies.setHlikia(deigmaOrnithopanidaXSpeciesDTO.getHlikia());
        deigmaOrnithopanidaXSpecies.setArithmosatomon(deigmaOrnithopanidaXSpeciesDTO.getArithmosatomon());
        deigmaOrnithopanidaXSpecies.setParatiriseis(deigmaOrnithopanidaXSpeciesDTO.getParatiriseis());
        deigmaOrnithopanidaXSpecies.setEkpar1(deigmaOrnithopanidaXSpeciesDTO.getEkpar1());
        deigmaOrnithopanidaXSpecies.setEkpar2(deigmaOrnithopanidaXSpeciesDTO.getEkpar2());
        deigmaOrnithopanidaXSpecies.setEkpar3(deigmaOrnithopanidaXSpeciesDTO.getEkpar3());
        deigmaOrnithopanidaXSpecies.setAttitude(deigmaOrnithopanidaXSpeciesDTO.getAttitude());
        deigmaOrnithopanidaXSpecies.setTyposparatiriseis(deigmaOrnithopanidaXSpeciesDTO.getTyposparatiriseis());
        deigmaOrnithopanidaXSpecies.setKodikos(deigmaOrnithopanidaXSpeciesDTO.getKodikos());

        return deigmaOrnithopanidaXSpecies;
    }

    @Override
    public DeigmaOrnithopanidaXSpeciesDTO deigmaOrnithopanidaXSpeciesDTOTOdeigmaOrnithopanidaXSpecies(DeigmaOrnithopanidaXSpecies deigmaOrnithopanidaXSpecies) {
        if (deigmaOrnithopanidaXSpecies == null) {
            return null;
        }
        DeigmaOrnithopanidaXSpeciesDTO deigmaOrnithopanidaXSpeciesDTO = new DeigmaOrnithopanidaXSpeciesDTO();

        deigmaOrnithopanidaXSpeciesDTO.setDeigmataOrnithopanidasid(deigmaOrnithopanidaXSpecies.getDeigmaOrnithopanida().getId());
        deigmaOrnithopanidaXSpeciesDTO.setAadeigmatos(deigmaOrnithopanidaXSpecies.getAadeigmatos());
        deigmaOrnithopanidaXSpeciesDTO.setOra(deigmaOrnithopanidaXSpecies.getOra());
        deigmaOrnithopanidaXSpeciesDTO.setXegsa(deigmaOrnithopanidaXSpecies.getXegsa());
        deigmaOrnithopanidaXSpeciesDTO.setYegsa(deigmaOrnithopanidaXSpecies.getYegsa());
        deigmaOrnithopanidaXSpeciesDTO.setFulo(deigmaOrnithopanidaXSpecies.getFulo());
        deigmaOrnithopanidaXSpeciesDTO.setHlikia(deigmaOrnithopanidaXSpecies.getHlikia());
        deigmaOrnithopanidaXSpeciesDTO.setArithmosatomon(deigmaOrnithopanidaXSpecies.getArithmosatomon());
        deigmaOrnithopanidaXSpeciesDTO.setParatiriseis(deigmaOrnithopanidaXSpecies.getParatiriseis());
        deigmaOrnithopanidaXSpeciesDTO.setEkpar1(deigmaOrnithopanidaXSpecies.getEkpar1());
        deigmaOrnithopanidaXSpeciesDTO.setEkpar2(deigmaOrnithopanidaXSpecies.getEkpar2());
        deigmaOrnithopanidaXSpeciesDTO.setEkpar3(deigmaOrnithopanidaXSpecies.getEkpar3());
        deigmaOrnithopanidaXSpeciesDTO.setAttitude(deigmaOrnithopanidaXSpecies.getAttitude());
        deigmaOrnithopanidaXSpeciesDTO.setTyposparatiriseis(deigmaOrnithopanidaXSpecies.getTyposparatiriseis());
        deigmaOrnithopanidaXSpeciesDTO.setKodikos(deigmaOrnithopanidaXSpecies.getKodikos());

        return deigmaOrnithopanidaXSpeciesDTO;

    }
}