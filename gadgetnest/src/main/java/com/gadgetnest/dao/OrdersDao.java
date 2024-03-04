package com.gadgetnest.dao;

import com.gadgetnest.entities.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrdersDao extends JpaRepository<Orders,Long> { //Long--- passing primary key
    @Query("select o from Orders o where o.users is not null")
    List<Orders> findAllOrdersNonValues();
}
