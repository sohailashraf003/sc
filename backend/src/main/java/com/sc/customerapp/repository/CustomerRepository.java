package com.sc.customerapp.repository;

import com.sc.customerapp.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {


}
