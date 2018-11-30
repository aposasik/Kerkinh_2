package com.teicm.kerkinibackend.domain.Ornithopanida;

import javax.persistence.*;
import java.sql.Time;

@Entity
public class DeigmaOrnithopanidaXSpecies
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Kodikos")
    private Long kodikos;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="AADeigmatos",nullable=false)
    private Long AADeigmatos;

    @Column(name = "Ora")
    private Time Ora;

    @Column(name = "XEGSA")
    private Double XEGSA;

    @Column(name = "YEGSA")
    private Double YEGSA;

    @Column(name = "Fulo")
    private String Fulo;

    @Column(name = "Hlikia")
    private String Hlikia;

    @Column(name = "ArithmosAtomon")
    private String ArithmosAtomon;

    @Column(name = "Paratiriseis")
    private String Paratiriseis;

    @Column(name = "EK_Par_1")
    private Boolean EK_Par_1;

    @Column(name = "EK_Par_2")
    private Boolean EK_Par_2;

    @Column(name = "EK_Par_3")
    private Boolean EK_Par_3;

    @Column(name = "Attitude")
    private String Attitude;

    @Column(name = "TyposParatiriseis")
    private String TyposParatiriseis;

    @ManyToOne
    private DeigmaOrnithopanida deigmaOrnithopanida;

    @ManyToOne
    private CTOrnithopanidaEidi ctornithopanidaEidi;

    public DeigmaOrnithopanidaXSpecies(){

    }
    public DeigmaOrnithopanidaXSpecies(DeigmaOrnithopanida deigmaOrnithopanida,CTOrnithopanidaEidi ctornithopanidaEidi,Long kodikos, Long AADeigmatos, Time Ora,Double XEGSA,Double YEGSA,String Fulo, String Hlikia,String ArithmosAtomon, String Paratiriseis,Boolean EK_Par_1,Boolean EK_Par_2,Boolean EK_Par_3,String Attitude,String TyposParatiriseis)
    {
        this.deigmaOrnithopanida=deigmaOrnithopanida;
        this.ctornithopanidaEidi=ctornithopanidaEidi;
        this.kodikos = kodikos;
        this.AADeigmatos=AADeigmatos;
        this.Ora=Ora;
        this.XEGSA=XEGSA;
        this.YEGSA=YEGSA;
        this.Fulo=Fulo;
        this.Hlikia=Hlikia;
        this.ArithmosAtomon=ArithmosAtomon;
        this.Paratiriseis=Paratiriseis;
        this.EK_Par_1=EK_Par_1;
        this.EK_Par_2=EK_Par_2;
        this.EK_Par_3=EK_Par_3;
        this.Attitude=Attitude;
        this.TyposParatiriseis=TyposParatiriseis;
    }

    public Long getKodikos() {
        return kodikos;
    }
    public void setKodikos(Long kodikos) {
        this.kodikos = kodikos;
    }
    public Long getAADeigmatos() {
        return AADeigmatos;
    }
    public void setAADeigmatos(Long AADeigmatos) {
        this.AADeigmatos = AADeigmatos;
    }
    public Time getOra() {
        return Ora;
    }
    public void setOra(Time ora) {
        Ora = ora;
    }
    public Double getXEGSA() {
        return XEGSA;
    }
    public void setXEGSA(Double XEGSA) {
        this.XEGSA = XEGSA;
    }
    public Double getYEGSA() {
        return YEGSA;
    }
    public void setYEGSA(Double YEGSA) {
        this.YEGSA = YEGSA;
    }
    public String getFulo() {
        return Fulo;
    }
    public void setFulo(String fulo) {
        Fulo = fulo;
    }
    public String getHlikia() {
        return Hlikia;
    }
    public void setHlikia(String hlikia) {
        Hlikia = hlikia;
    }
    public String getArithmosAtomon() {
        return ArithmosAtomon;
    }
    public void setArithmosAtomon(String arithmosAtomon) {
        ArithmosAtomon = arithmosAtomon;
    }
    public String getParatiriseis() {
        return Paratiriseis;
    }
    public void setParatiriseis(String paratiriseis) {
        Paratiriseis = paratiriseis;
    }
    public Boolean getEK_Par_1() {
        return EK_Par_1;
    }
    public void setEK_Par_1(Boolean EK_Par_1) {
        this.EK_Par_1 = EK_Par_1;
    }
    public Boolean getEK_Par_2() {
        return EK_Par_2;
    }
    public void setEK_Par_2(Boolean EK_Par_2) {
        this.EK_Par_2 = EK_Par_2;
    }
    public Boolean getEK_Par_3() {
        return EK_Par_3;
    }
    public void setEK_Par_3(Boolean EK_Par_3) {
        this.EK_Par_3 = EK_Par_3;
    }
    public String getAttitude() {
        return Attitude;
    }
    public void setAttitude(String attitude) {
        Attitude = attitude;
    }
    public String getTyposParatiriseis() {
        return TyposParatiriseis;
    }
    public void setTyposParatiriseis(String typosParatiriseis) {
        TyposParatiriseis = typosParatiriseis;
    }
    public DeigmaOrnithopanida getDeigmaOrnithopanida() {
        return deigmaOrnithopanida;
    }
    public void setDeigmaOrnithopanida(DeigmaOrnithopanida deigmaOrnithopanida) {
        this.deigmaOrnithopanida = deigmaOrnithopanida;
    }
    public CTOrnithopanidaEidi getCtornithopanidaEidi() {
        return ctornithopanidaEidi;
    }
    public void setCtornithopanidaEidi(CTOrnithopanidaEidi ctornithopanidaEidi) {
        this.ctornithopanidaEidi = ctornithopanidaEidi;
    }
}