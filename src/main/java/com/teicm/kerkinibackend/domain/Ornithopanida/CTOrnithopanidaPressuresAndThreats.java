package com.teicm.kerkinibackend.domain.Ornithopanida;


import javax.persistence.*;
import java.util.Set;

@Entity
public class CTOrnithopanidaPressuresAndThreats
{
    @Id
    @Column(name = "ACT_Code", length = 50)
    private String ACT_Code;

    @Column(name = "Descript_EN", length = 255)
    private String DescriptEN;

    @Column(name = "Remarks", length = 255)
    private String Remarks;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "CTOrnithopanidaPressuresAndThreats")
    private Set<DeigmaOrnithopanidaXPresAndThreats> deigmaOrnithopanidaXPresAndThreatsSet;

    public CTOrnithopanidaPressuresAndThreats() { }

    public CTOrnithopanidaPressuresAndThreats(String ACT_Code,String DescriptEN,String Remarks, Set<DeigmaOrnithopanidaXPresAndThreats> deigmaOrnithopanidaXPresAndThreatsSet)
    {
        this.ACT_Code = ACT_Code;
        this.DescriptEN = DescriptEN;
        this.Remarks = Remarks;
        this.deigmaOrnithopanidaXPresAndThreatsSet = deigmaOrnithopanidaXPresAndThreatsSet;
    }

    public String getACT_Code() {
        return ACT_Code;
    }
    public void setACT_Code(String ACT_Code) {
        this.ACT_Code = ACT_Code;
    }
    public String getDescriptEN() {
        return DescriptEN;
    }
    public void setDescriptEN(String descriptEN) {
        DescriptEN = descriptEN;
    }
    public String getRemarks() {
        return Remarks;
    }
    public void setRemarks(String remarks) {
        Remarks = remarks;
    }
    public Set<DeigmaOrnithopanidaXPresAndThreats> getDeigmaOrnithopanidaXPresAndThreatsSet() {
        return deigmaOrnithopanidaXPresAndThreatsSet;
    }
    public void setDeigmaOrnithopanidaXPresAndThreatsSet(Set<DeigmaOrnithopanidaXPresAndThreats> deigmaOrnithopanidaXPresAndThreatsSet) {
        this.deigmaOrnithopanidaXPresAndThreatsSet = deigmaOrnithopanidaXPresAndThreatsSet;
    }
}