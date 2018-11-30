package com.teicm.kerkinibackend.domain.Ornithopanida;


import javax.persistence.*;

@Entity
public class DeigmaOrnithopanidaXPresAndThreats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    //TODO to name prosoxi
    @JoinColumn(name = "deigma_ornithopanida_id")
    @ManyToOne
    private DeigmaOrnithopanida deigmaOrnithopanida;

    @ManyToOne
    private CTOrnithopanidaPressuresAndThreats ctOrnithopanidaPressuresAndThreats;
}
