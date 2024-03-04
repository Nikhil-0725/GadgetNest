//package com.gadgetnest.controller;
//
//import com.gadgetnest.entities.Cart;
//import com.gadgetnest.service.CartService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//@RequestMapping(path = "/cart")
//@CrossOrigin(origins = "http://localhost:3000")
//public class CartController {
//
//    @Autowired
//    private CartService cartservice;
//
//    @GetMapping("/display")
//    public List<Cart> displayAll(){
//        return cartservice.displayAll();
//    }
//
//}
