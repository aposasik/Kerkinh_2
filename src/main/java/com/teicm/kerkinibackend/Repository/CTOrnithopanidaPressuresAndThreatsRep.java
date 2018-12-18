package com.teicm.kerkinibackend.Repository;

import com.teicm.kerkinibackend.domain.Ornithopanida.CTOrnithopanidaPressuresAndThreats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;
import java.util.Optional;


public interface CTOrnithopanidaPressuresAndThreatsRep extends JpaRepository<com.teicm.kerkinibackend.domain.Ornithopanida.CTOrnithopanidaPressuresAndThreats, Long>
{
    Optional<CTOrnithopanidaPressuresAndThreats> findById(Long id);

    @Query(nativeQuery = true, value ="SELECT DISTINCT a.act_code FROM ctornithopanida_pressures_and_threats a ORDER BY act_code ASC" )
    ArrayList<String> findActOrderByAct();
}
