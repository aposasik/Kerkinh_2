package com.teicm.kerkinibackend.api.v1.mapper;

import com.teicm.kerkinibackend.api.v1.model.DeigmaOrnithopanidaDTO;
import com.teicm.kerkinibackend.domain.Ornithopanida.DeigmaOrnithopanida;
import org.springframework.stereotype.Component;

@Component
public class DeigmaOrnithopanidaMapperImpl implements DeigmaOrnithopanidaMapper{

    @Override
    public DeigmaOrnithopanida deigmaOrnithopanidaTOdeigmaOrnithopanidaDTO(DeigmaOrnithopanidaDTO deigmaOrnithopanidaDTO) {
        if (deigmaOrnithopanidaDTO == null) {
            return null;
        }
        DeigmaOrnithopanida deigmaOrnithopanida = new DeigmaOrnithopanida();

        deigmaOrnithopanida.setResearcher(deigmaOrnithopanidaDTO.getResearcher());
        deigmaOrnithopanida.setLocality(deigmaOrnithopanidaDTO.getLocality());
        deigmaOrnithopanida.setXegsa(deigmaOrnithopanidaDTO.getXegsa());
        deigmaOrnithopanida.setYegsa(deigmaOrnithopanidaDTO.getYegsa());
        deigmaOrnithopanida.setDate(deigmaOrnithopanidaDTO.getDate());
        deigmaOrnithopanida.setTime(deigmaOrnithopanidaDTO.getTime());
        deigmaOrnithopanida.setKodikosDeigmatolipsias(deigmaOrnithopanidaDTO.getKodikosDeigmatolipsias());
        deigmaOrnithopanida.setParatiriseis(deigmaOrnithopanidaDTO.getParatiriseis());
        deigmaOrnithopanida.setXrimatodotikoMeso(deigmaOrnithopanidaDTO.getXrimatodotikoMeso());
        deigmaOrnithopanida.setHabitat(deigmaOrnithopanidaDTO.getHabitat());
        deigmaOrnithopanida.setXegsa(deigmaOrnithopanidaDTO.getXegsa());
        deigmaOrnithopanida.setYegsa(deigmaOrnithopanidaDTO.getYegsa());
        deigmaOrnithopanida.setLatitude(deigmaOrnithopanidaDTO.getLatitude());
        deigmaOrnithopanida.setLongitude(deigmaOrnithopanidaDTO.getLongitude());
        deigmaOrnithopanida.setAltitude(deigmaOrnithopanidaDTO.getAltitude());
        deigmaOrnithopanida.setXegsat(deigmaOrnithopanidaDTO.getXegsat());
        deigmaOrnithopanida.setYegsat(deigmaOrnithopanidaDTO.getYegsat());
        deigmaOrnithopanida.setLatitudet(deigmaOrnithopanidaDTO.getLatitudet());
        deigmaOrnithopanida.setLongitudet(deigmaOrnithopanidaDTO.getLongitudet());
        deigmaOrnithopanida.setParatiriseis(deigmaOrnithopanidaDTO.getParatiriseis());
        deigmaOrnithopanida.setAltitudet(deigmaOrnithopanidaDTO.getAltitudet());
        deigmaOrnithopanida.setNomos(deigmaOrnithopanidaDTO.getNomos());
        deigmaOrnithopanida.setGridCell(deigmaOrnithopanidaDTO.getGridCell());
        deigmaOrnithopanida.setKodikosNatura(deigmaOrnithopanidaDTO.getKodikosNatura());
        deigmaOrnithopanida.setMethodos(deigmaOrnithopanidaDTO.getMethodos());
        deigmaOrnithopanida.setKyriarxosTyposVlastisis(deigmaOrnithopanidaDTO.getKyriarxosTyposVlastisis());
        deigmaOrnithopanida.setKalypsi(deigmaOrnithopanidaDTO.getKalypsi());
        deigmaOrnithopanida.setPuknotita(deigmaOrnithopanidaDTO.getPuknotita());
        deigmaOrnithopanida.setPoiotita(deigmaOrnithopanidaDTO.getPoiotita());
        deigmaOrnithopanida.setPhoto(deigmaOrnithopanidaDTO.getPhoto());
        deigmaOrnithopanida.setFile(deigmaOrnithopanidaDTO.getFile());
        deigmaOrnithopanida.setNefoseis(deigmaOrnithopanidaDTO.getNefoseis());
        deigmaOrnithopanida.setKateuthinsiAnemou(deigmaOrnithopanidaDTO.getKateuthinsiAnemou());
        deigmaOrnithopanida.setKateuthinsiAnemouAzim(deigmaOrnithopanidaDTO.getKateuthinsiAnemouAzim());
        deigmaOrnithopanida.setThermokrasia(deigmaOrnithopanidaDTO.getThermokrasia());
        deigmaOrnithopanida.setEntasiAnemou(deigmaOrnithopanidaDTO.getEntasiAnemou());
        return deigmaOrnithopanida;
    }

    @Override
    public DeigmaOrnithopanidaDTO deigmaOrnithopanidaDTOTOdeigmaOrnithopanida(DeigmaOrnithopanida deigmaOrnithopanida) {
        if (deigmaOrnithopanida == null) {
            return null;
        }
        DeigmaOrnithopanidaDTO deigmaOrnithopanidaDTO = new DeigmaOrnithopanidaDTO();

        deigmaOrnithopanidaDTO.setResearcher(deigmaOrnithopanida.getResearcher());
        deigmaOrnithopanidaDTO.setLocality(deigmaOrnithopanida.getLocality());
        deigmaOrnithopanidaDTO.setXegsa(deigmaOrnithopanida.getXegsa());
        deigmaOrnithopanidaDTO.setYegsa(deigmaOrnithopanida.getYegsa());
        deigmaOrnithopanidaDTO.setDate(deigmaOrnithopanida.getDate());
        deigmaOrnithopanidaDTO.setTime(deigmaOrnithopanida.getTime());
        deigmaOrnithopanidaDTO.setKodikosDeigmatolipsias(deigmaOrnithopanida.getKodikosDeigmatolipsias());
        deigmaOrnithopanidaDTO.setParatiriseis(deigmaOrnithopanida.getParatiriseis());
        deigmaOrnithopanidaDTO.setXrimatodotikoMeso(deigmaOrnithopanida.getXrimatodotikoMeso());
        deigmaOrnithopanidaDTO.setHabitat(deigmaOrnithopanida.getHabitat());
        deigmaOrnithopanidaDTO.setXegsa(deigmaOrnithopanida.getXegsa());
        deigmaOrnithopanidaDTO.setYegsa(deigmaOrnithopanida.getYegsa());
        deigmaOrnithopanidaDTO.setLatitude(deigmaOrnithopanida.getLatitude());
        deigmaOrnithopanidaDTO.setLongitude(deigmaOrnithopanida.getLongitude());
        deigmaOrnithopanidaDTO.setAltitude(deigmaOrnithopanida.getAltitude());
        deigmaOrnithopanidaDTO.setXegsat(deigmaOrnithopanida.getXegsat());
        deigmaOrnithopanidaDTO.setYegsat(deigmaOrnithopanida.getYegsat());
        deigmaOrnithopanidaDTO.setLatitudet(deigmaOrnithopanida.getLatitudet());
        deigmaOrnithopanidaDTO.setLongitudet(deigmaOrnithopanida.getLongitudet());
        deigmaOrnithopanidaDTO.setParatiriseis(deigmaOrnithopanida.getParatiriseis());
        deigmaOrnithopanidaDTO.setAltitudet(deigmaOrnithopanida.getAltitudet());
        deigmaOrnithopanidaDTO.setNomos(deigmaOrnithopanida.getNomos());
        deigmaOrnithopanidaDTO.setGridCell(deigmaOrnithopanida.getGridCell());
        deigmaOrnithopanidaDTO.setKodikosNatura(deigmaOrnithopanida.getKodikosNatura());
        deigmaOrnithopanidaDTO.setMethodos(deigmaOrnithopanida.getMethodos());
        deigmaOrnithopanidaDTO.setKyriarxosTyposVlastisis(deigmaOrnithopanida.getKyriarxosTyposVlastisis());
        deigmaOrnithopanidaDTO.setKalypsi(deigmaOrnithopanida.getKalypsi());
        deigmaOrnithopanidaDTO.setPuknotita(deigmaOrnithopanida.getPuknotita());
        deigmaOrnithopanidaDTO.setPoiotita(deigmaOrnithopanida.getPoiotita());
        deigmaOrnithopanidaDTO.setPhoto(deigmaOrnithopanida.getPhoto());
        deigmaOrnithopanidaDTO.setFile(deigmaOrnithopanida.getFile());
        deigmaOrnithopanidaDTO.setNefoseis(deigmaOrnithopanida.getNefoseis());
        deigmaOrnithopanidaDTO.setKateuthinsiAnemou(deigmaOrnithopanida.getKateuthinsiAnemou());
        deigmaOrnithopanidaDTO.setKateuthinsiAnemouAzim(deigmaOrnithopanida.getKateuthinsiAnemouAzim());
        deigmaOrnithopanidaDTO.setThermokrasia(deigmaOrnithopanida.getThermokrasia());
        deigmaOrnithopanidaDTO.setEntasiAnemou(deigmaOrnithopanida.getEntasiAnemou());

        return deigmaOrnithopanidaDTO;
    }

}


