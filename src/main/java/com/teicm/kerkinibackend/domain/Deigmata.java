package com.teicm.kerkinibackend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.teicm.kerkinibackend.domain.Ornithopanida.DeigmaOrnithopanida;

import javax.persistence.*;

@Entity
public class Deigmata
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JsonIgnore
    private DeigmaOrnithopanida deigmaOrnithopanida;


    public Deigmata() {
    }

    public Deigmata(DeigmaOrnithopanida deigmaOrnithopanida) {
        this.deigmaOrnithopanida = deigmaOrnithopanida;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public DeigmaOrnithopanida getDeigmaOrnithopanida() {
        return deigmaOrnithopanida;
    }
    public void setDeigmaOrnithopanida(DeigmaOrnithopanida deigmaOrnithopanida) {
        this.deigmaOrnithopanida = deigmaOrnithopanida;
    }
}