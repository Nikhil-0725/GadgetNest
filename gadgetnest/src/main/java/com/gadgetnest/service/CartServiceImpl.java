//package com.gadgetnest.service;
//
//import com.gadgetnest.dao.CartDao;
//import com.gadgetnest.dao.OrdersDao;
//import com.gadgetnest.dao.ProductsDao;
//import com.gadgetnest.entities.Cart;
//import com.gadgetnest.entities.Users;
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class CartServiceImpl implements CartService{
//
//    @Autowired
//    private CartDao cartdao;
//
//    @Autowired
//    private OrdersDao ordersdao;
//
//    @Autowired
//    private ProductsDao productsdao;
//
//    @Autowired
//    private ModelMapper modelmapper;
//    @Override
//    public List<Cart> displayAll() {
//        return cartdao.findAllCartNonValue();
//    }
//
//}
