package com.teicm.kerkinibackend.api.v1.model;

public class CTOrnithopanidaPressuresAndThreatsDTO
{
    private String ACT_Code;
    private String DescriptEN;
    private String Remarks;

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
}
