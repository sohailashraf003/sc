package com.sc.customerapp.service;

import com.sc.customerapp.entity.Customer;
import com.sc.customerapp.entity.CustomerAddress;
import com.sc.customerapp.repository.CustomerAddressRepository;
import com.sc.customerapp.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private CustomerAddressRepository customerAddressRepository;

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer createCustomer(final Customer customer) {
        Customer customer1  = customerRepository.save(customer);
        List<CustomerAddress> addresses = customer.getCustomerAddresses();
        addresses.forEach( address -> {
            address.setCustomer(customer1);
            customerAddressRepository.save(address);
        });
        return customer1;

    }

    public Customer updateCustomer(final Customer customer) {

        Customer custm = customerRepository.save(customer);
        List<CustomerAddress> customerAddress = customer.getCustomerAddresses();
        if(customerAddress.size() > 0) {
            customerAddress.forEach( address -> {
                address.setCustomer(custm);
                customerAddressRepository.save(address);
            });
        }

        return custm;
    }

    @Transactional
    public Customer deleteCustomerById(final Long id) {
        Customer customer = null;
        try {
            customer = customerRepository.getOne(id);
            if(customer != null ) {
                List<CustomerAddress> customerAddresses = customerAddressRepository.findByCustomer(customer);
                if(customerAddresses.size() > 0) {
                    customerAddresses.forEach( address -> {
                        customerAddressRepository.delete(address);
                    });
                }
                customerRepository.delete(customer);
            }
        } catch(Exception ex) {
            System.out.println("Customer not found");
            System.out.println(ex.getMessage());
        }


        return customer;

    }

    public Optional<Customer> getCustomersById(Long id) {
        Optional<Customer> customer = null;
        try {
            customer = customerRepository.findById(id);
        } catch(Exception ex) {
            System.out.println("Customer not found");
            System.out.println(ex.getMessage());
        }
        return customer;
    }
}
