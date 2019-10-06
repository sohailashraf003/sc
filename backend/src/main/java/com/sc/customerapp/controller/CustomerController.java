package com.sc.customerapp.controller;

import com.sc.customerapp.entity.Customer;
import com.sc.customerapp.model.ResponseModel;
import com.sc.customerapp.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping("/customer")
    public ResponseEntity<List<Customer>> customer() {

        List<Customer> customers = customerService.getAllCustomers();
        if(customers.size() > 0 ) {
            return new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
        } else {
            return new ResponseEntity<List<Customer>>( customers, HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/customer/{customerID}")
    public ResponseEntity<Customer> customer(@PathVariable(value="customerID") Long id ) {

        Optional<Customer> customers = customerService.getCustomersById(id);
        if(customers.isPresent()) {
            return new ResponseEntity<Customer>(customers.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<Customer>( HttpStatus.NO_CONTENT);
        }
    }

    @PostMapping("/customer")
    public ResponseEntity<ResponseModel> createCustomer(@RequestBody Customer customer) {
        ResponseModel response;
        System.out.println(customer);
        if(customer == null) {
            response = new ResponseModel("Insufficient data", 402);
            return new ResponseEntity<ResponseModel>( response, HttpStatus.BAD_REQUEST);
        }

        Customer saved = customerService.createCustomer(customer);
        if(saved != null) {
            response = new ResponseModel("Created successfully", 201);
            return new ResponseEntity<ResponseModel>( response, HttpStatus.CREATED);
        }
        response = new ResponseModel("Something went wrong", 400);
        return new ResponseEntity<ResponseModel>( response, HttpStatus.CREATED);
    }

    @PutMapping("/customer")
    public ResponseEntity<ResponseModel> updateCustomer(@RequestBody Customer customer) {
        ResponseModel response;

        if(customer == null) {
            response = new ResponseModel("Insufficient data", 402);
            return new ResponseEntity<ResponseModel>( response, HttpStatus.BAD_REQUEST);
        }

        Customer updated = customerService.updateCustomer(customer);
        if(updated != null) {
            response = new ResponseModel("Created successfully", 201);
            return new ResponseEntity<ResponseModel>( response, HttpStatus.CREATED);
        }
        response = new ResponseModel("Something went wrong", 400);
        return new ResponseEntity<ResponseModel>( response, HttpStatus.CREATED);
    }

    @DeleteMapping("/customer/{customerID}")
    public ResponseEntity<ResponseModel> deleteCustomer(@PathVariable(value="customerID") Long id) {
        ResponseModel response;
        if(id == null) {
            response = new ResponseModel("Invalid customer id", 402);
            return new ResponseEntity<ResponseModel>( response, HttpStatus.BAD_REQUEST);
        }

        Customer deleted = customerService.deleteCustomerById(id);
        if(deleted != null) {
            response = new ResponseModel("Deleted successfully", 200);
            return new ResponseEntity<ResponseModel>( response, HttpStatus.OK);
        }
        response = new ResponseModel("Customer data not found", 404);
        return new ResponseEntity<ResponseModel>( response, HttpStatus.NOT_FOUND);
    }

}
