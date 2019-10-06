package com.sc.customerapp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class CustomerAddress {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JsonIgnore
    private Customer customer;
    private String type;
    private String addrLine1;
    private String addrLine2;
    private String addrLine3;
    private String addrLine4;
    private String countryCode;
    private String zipcode;
    private String state;
    private String city;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAddrLine1() {
        return addrLine1;
    }

    public void setAddrLine1(String addrLine1) {
        this.addrLine1 = addrLine1;
    }

    public String getAddrLine2() {
        return addrLine2;
    }

    public void setAddrLine2(String addrLine2) {
        this.addrLine2 = addrLine2;
    }

    public String getAddrLine3() {
        return addrLine3;
    }

    public void setAddrLine3(String addrLine3) {
        this.addrLine3 = addrLine3;
    }

    public String getAddrLine4() {
        return addrLine4;
    }

    public void setAddrLine4(String addrLine4) {
        this.addrLine4 = addrLine4;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "CustomerAddress{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", addrLine1='" + addrLine1 + '\'' +
                ", addrLine2='" + addrLine2 + '\'' +
                ", addrLine3='" + addrLine3 + '\'' +
                ", addrLine4='" + addrLine4 + '\'' +
                ", countryCode='" + countryCode + '\'' +
                ", zipcode='" + zipcode + '\'' +
                ", state='" + state + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
