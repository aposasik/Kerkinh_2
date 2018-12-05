package com.teicm.kerkinibackend.domain.Ornithopanida;


import javax.persistence.*;
import java.util.Set;

@Entity
public class CTOrnithopanidaEidi
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "kodikoseidos", length = 50)
    private String kodikoseidos;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "ctornithopanidaEidi")
    private Set<DeigmaOrnithopanidaXSpecies> deigmaOrnithopanidaXSpeciesSet;

    public CTOrnithopanidaEidi() { }

    public CTOrnithopanidaEidi(String kodikoseidos, Set<DeigmaOrnithopanidaXSpecies> deigmaOrnithopanidaXSpeciesSet)
    {
        this.kodikoseidos = kodikoseidos;
        this.deigmaOrnithopanidaXSpeciesSet = deigmaOrnithopanidaXSpeciesSet;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getKodikoseidos() {
        return kodikoseidos;
    }
    public void setKodikoseidos(String kodikoseidos) {
        this.kodikoseidos = kodikoseidos;
    }
    public Set<DeigmaOrnithopanidaXSpecies> getDeigmaOrnithopanidaXSpeciesSet() {
        return deigmaOrnithopanidaXSpeciesSet;
    }
    public void setDeigmaOrnithopanidaXSpeciesSet(Set<DeigmaOrnithopanidaXSpecies> deigmaOrnithopanidaXSpeciesSet) {
        this.deigmaOrnithopanidaXSpeciesSet = deigmaOrnithopanidaXSpeciesSet;
    }
}