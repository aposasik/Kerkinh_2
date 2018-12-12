package com.teicm.kerkinibackend.domain.Ornithopanida;




import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class DeigmaOrnithopanidaXPresAndThreats
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;


    @Column(name = "kodikos")
    private Long kodikos;

    @Column(name = "releveNR", length = 50)
    private String relevenr;

    @Column(name = "actCode", length = 50)
    private String actcode;

    @Column(name = "type", length = 50)
    private String type;

    @Column(name = "importance", length = 1)
    private String importance;

    @ManyToOne
    private DeigmaOrnithopanida deigmaOrnithopanida;

    @ManyToOne
    private CTOrnithopanidaPressuresAndThreats ctornithopanidaPressuresAndThreats;

    public  DeigmaOrnithopanidaXPresAndThreats()
    {}

    public  DeigmaOrnithopanidaXPresAndThreats(DeigmaOrnithopanida deigmaOrnithopanida,CTOrnithopanidaPressuresAndThreats ctornithopanidaPressuresAndThreats,Long kodikos,String relevenr,String actcode,String type,String importance)
    {
        this.deigmaOrnithopanida=deigmaOrnithopanida;
        this.ctornithopanidaPressuresAndThreats=ctornithopanidaPressuresAndThreats;
        this.kodikos=kodikos;
        this.relevenr=relevenr;
        this.actcode=actcode;
        this.type=type;
        this.importance=importance;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getKodikos() {
        return kodikos;
    }

    public void setKodikos(Long kodikos) {
        this.kodikos = kodikos;
    }

    public String getRelevenr() {
        return relevenr;
    }

    public void setRelevenr(String relevenr) {
        this.relevenr = relevenr;
    }

    public String getActcode() {
        return actcode;
    }

    public void setActcode(String actcode) {
        this.actcode = actcode;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImportance() {
        return importance;
    }

    public void setImportance(String importance) {
        this.importance = importance;
    }

    public DeigmaOrnithopanida getDeigmaOrnithopanida() {
        return deigmaOrnithopanida;
    }

    public void setDeigmaOrnithopanida(DeigmaOrnithopanida deigmaOrnithopanida) {
        this.deigmaOrnithopanida = deigmaOrnithopanida;
    }

    public CTOrnithopanidaPressuresAndThreats getCtornithopanidaPressuresAndThreats() {
        return ctornithopanidaPressuresAndThreats;
    }

    public void setCtornithopanidaPressuresAndThreats(CTOrnithopanidaPressuresAndThreats ctornithopanidaPressuresAndThreats) {
        this.ctornithopanidaPressuresAndThreats = ctornithopanidaPressuresAndThreats;
    }
}