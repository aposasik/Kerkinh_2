package com.teicm.kerkinibackend.api.v1.model;

public class DeigmaOrnithopanidaXPresAndThreatsDTO
{
    private Long kodikos;
    private String Releve_NR;
    private String ACT_Code;
    private String Type;
    private String Importance;


    public Long getKodikos() {
        return kodikos;
    }
    public void setKodikos(Long kodikos) {
        this.kodikos = kodikos;
    }
    public String getReleve_NR() {
        return Releve_NR;
    }
    public void setReleve_NR(String releve_NR) {
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
}
