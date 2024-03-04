package com.gadgetnest.service;

import com.gadgetnest.dto.OrdersDTO;
import com.gadgetnest.entities.Orders;

import java.util.List;

public interface OrdersService {
    List<Orders> displayAllOrders();

    Orders addOrders(OrdersDTO ordr);

    String deleteOrders(Long oid);

}
