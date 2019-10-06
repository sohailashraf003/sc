package com.sc.customerapp.model;

import org.springframework.stereotype.Component;

public class ResponseModel {

    public String getStatus() {
        return status;
    }

    public ResponseModel(String status, int code) {
        this.status = status;
        this.code = code;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    private String status;
    private int code;

}
