package com.gadgetnest.service;

import com.gadgetnest.dao.OrdersDao;
import com.gadgetnest.dao.UsersDao;
import com.gadgetnest.dto.OrdersDTO;
import com.gadgetnest.entities.Orders;
import com.gadgetnest.entities.Users;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersServiceImpl implements OrdersService{
    @Autowired
    private OrdersDao ordersdao;

    @Autowired
    private UsersDao usersdao;

    @Autowired
    private ModelMapper modelmapper;

    @Override
    public List<Orders> displayAllOrders() {
        return ordersdao.findAllOrdersNonValues();
    }

    @Override
    public Orders addOrders(OrdersDTO ordr) {
    Users u= usersdao.findById(ordr.getUserId()).orElseThrow();
    Orders o=modelmapper.map(ordr,Orders.class);
    if(u!=null){
        u.addOrders(o);
        o.setUsers(u);
    }
    return ordersdao.save(o);
    }

    @Override
    public String deleteOrders(Long oid) {
        Orders orders=new Orders();
        orders.setOrderId(oid);
        ordersdao.delete(orders);
        return "Order deleted with id : "+oid;
    }

}