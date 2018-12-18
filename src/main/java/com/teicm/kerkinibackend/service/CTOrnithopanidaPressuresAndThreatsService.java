package com.teicm.kerkinibackend.service;

import com.teicm.kerkinibackend.domain.Ornithopanida.CTOrnithopanidaPressuresAndThreats;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public interface CTOrnithopanidaPressuresAndThreatsService
{
    List<CTOrnithopanidaPressuresAndThreats> findAll();

    CTOrnithopanidaPressuresAndThreats findById(Long id);

    boolean deletePressThreats(Long id);

    ArrayList<String> getAllActCodes();
}
