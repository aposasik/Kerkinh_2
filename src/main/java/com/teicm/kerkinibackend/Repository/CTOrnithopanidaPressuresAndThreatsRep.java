package com.teicm.kerkinibackend.Repository;

import com.teicm.kerkinibackend.domain.Ornithopanida.CTOrnithopanidaPressuresAndThreats;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface CTOrnithopanidaPressuresAndThreatsRep extends JpaRepository<com.teicm.kerkinibackend.domain.Ornithopanida.CTOrnithopanidaPressuresAndThreats, Long>
{
    Optional<CTOrnithopanidaPressuresAndThreats> findById(Long id);

}
