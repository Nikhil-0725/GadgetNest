//package com.gadgetnest.dao;
//
//import com.gadgetnest.entities.Cart;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//
//import java.util.List;
//
//public interface CartDao extends JpaRepository<Cart,Long> {
//    @Query("select c from Cart c where c.orders is not null")
//    List<Cart> findAllCartNonValue();
//}
