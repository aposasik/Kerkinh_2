package com.teicm.kerkinibackend.domain.Ornithopanida;




import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
public class DeigmaOrnithopanidaXPresAndThreats
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "kodikos")
    private Long kodikos;

    @Column(name = "Releve_NR", length = 50)
    private String Releve_NR;

    @Column(name = "ACT_Code", length = 50)
    private String ACT_Code;

    @Column(name = "Type", length = 50)
    private String Type;

    @Column(name = "Importance", length = 1)
    private String Importance;

    @ManyToOne
    private DeigmaOrnithopanida deigmaOrnithopanida;

    @ManyToOne
    private CTOrnithopanidaPressuresAndThreats ctornithopanidaPressuresAndThreats;

    public  DeigmaOrnithopanidaXPresAndThreats()
    {}

    public  DeigmaOrnithopanidaXPresAndThreats(DeigmaOrnithopanida deigmaOrnithopanida,CTOrnithopanidaPressuresAndThreats ctornithopanidaPressuresAndThreats,Long kodikos,String Releve_NR,String ACT_Code,String Type,String Importance)
    {
        this.deigmaOrnithopanida=deigmaOrnithopanida;
        this.ctornithopanidaPressuresAndThreats=ctornithopanidaPressuresAndThreats;
        this.kodikos=kodikos;
        this.Releve_NR=Releve_NR;
        this.ACT_Code=ACT_Code;
        this.Type=Type;
        this.Importance=Importance;
    }

    public Long getKodikos() {
        return kodikos;
    }
    public void setKodikos(Long kodikos) {
        this.kodikos = kodikos;
    }
    public String getReleve_NR() {
        return Releve_NR;
    }
    public  void setReleve_NR(String releve_NR) {
        Releve_NR = releve_NR;
    }
    public String getACT_Code() {
        return ACT_Code;
    }
    public void setACT_Code(String ACT_Code) {
        this.ACT_Code = ACT_Code;
    }
    public String getType() {
        return Type;
    }
    public void setType(String type) {
        Type = type;
    }
    public String getImportance() {
        return Importance;
    }
    public void setImportance(String importance) {
        Importance = importance;
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