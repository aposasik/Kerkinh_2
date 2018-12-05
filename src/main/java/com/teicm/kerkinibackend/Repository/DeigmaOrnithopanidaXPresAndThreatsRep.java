package com.teicm.kerkinibackend.Repository;

import com.teicm.kerkinibackend.domain.Ornithopanida.DeigmaOrnithopanidaXPresAndThreats;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeigmaOrnithopanidaXPresAndThreatsRep extends JpaRepository<DeigmaOrnithopanidaXPresAndThreats, Long>
{
    List<DeigmaOrnithopanidaXPresAndThreats> findAll();
}
