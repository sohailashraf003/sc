package com.sc.customerapp.repository;

import com.sc.customerapp.entity.Customer;
import com.sc.customerapp.entity.CustomerAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomerAddressRepository extends JpaRepository<CustomerAddress, Long> {

    public List<CustomerAddress> findByCustomer(Customer customer);

}
