package com.teicm.kerkinibackend.domain.Ornithopanida;


import javax.persistence.*;
import java.util.Set;

@Entity
public class CTOrnithopanidaPressuresAndThreats
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "actCode", length = 50)
    private String actcode;

    @Column(name = "descriptEn")
    private String descripten;

    @Column(name = "remarks")
    private String remarks;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "ctornithopanidaPressuresAndThreats")
    private Set<DeigmaOrnithopanidaXPresAndThreats> deigmaOrnithopanidaXPresAndThreatsSet;

    public CTOrnithopanidaPressuresAndThreats() { }

    public CTOrnithopanidaPressuresAndThreats(String actcode,String descripten,String remarks, Set<DeigmaOrnithopanidaXPresAndThreats> deigmaOrnithopanidaXPresAndThreatsSet)
    {
        this.actcode=actcode;
        this.descripten=descripten;
        this.remarks=remarks;
        this.deigmaOrnithopanidaXPresAndThreatsSet = deigmaOrnithopanidaXPresAndThreatsSet;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getActcode() {
        return actcode;
    }

    public void setActcode(String actcode) {
        this.actcode = actcode;
    }

    public String getDescripten() {
        return descripten;
    }

    public void setDescripten(String descripten) {
        this.descripten = descripten;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Set<DeigmaOrnithopanidaXPresAndThreats> getDeigmaOrnithopanidaXPresAndThreatsSet() {
        return deigmaOrnithopanidaXPresAndThreatsSet;
    }

    public void setDeigmaOrnithopanidaXPresAndThreatsSet(Set<DeigmaOrnithopanidaXPresAndThreats> deigmaOrnithopanidaXPresAndThreatsSet) {
        this.deigmaOrnithopanidaXPresAndThreatsSet = deigmaOrnithopanidaXPresAndThreatsSet;
    }
}