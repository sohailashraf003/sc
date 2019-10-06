package com.sc.customerapp.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Customer {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String firstName;
    private String middleName;
    @Column(nullable = false)
    private String lastName;
    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;
    @Column(nullable = false)
    private String mobileNumber;
    @Column(nullable = false)
    private char gender;
    @Column(nullable = false)
    private String customerNumber;
    @Column(nullable = false)
    private String countryOfBirth;
    @Column(nullable = false)
    private String countryOfResidence;
    private String customerSegment;
    @OneToMany(mappedBy = "customer")
    private List<CustomerAddress>  customerAddresses = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<CustomerAddress> getCustomerAddresses() {
        return customerAddresses;
    }

    public void setCustomerAddresses(List<CustomerAddress> customerAddresses) {
        this.customerAddresses = customerAddresses;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public String getCustomerNumber() {
        return customerNumber;
    }

    public void setCustomerNumber(String customerNumber) {
        this.customerNumber = customerNumber;
    }

    public String getCountryOfBirth() {
        return countryOfBirth;
    }

    public void setCountryOfBirth(String countryOfBirth) {
        this.countryOfBirth = countryOfBirth;
    }

    public String getCountryOfResidence() {
        return countryOfResidence;
    }

    public void setCountryOfResidence(String countryOfResidence) {
        this.countryOfResidence = countryOfResidence;
    }

    public String getCustomerSegment() {
        return customerSegment;
    }

    public void setCustomerSegment(String customerSegment) {
        this.customerSegment = customerSegment;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", middleName='" + middleName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", gender=" + gender +
                ", customerNumber='" + customerNumber + '\'' +
                ", countryOfBirth='" + countryOfBirth + '\'' +
                ", countryOfResidence='" + countryOfResidence + '\'' +
                ", customerSegment='" + customerSegment + '\'' +
                ", customerAddresses=" + customerAddresses +
                '}';
    }
}
