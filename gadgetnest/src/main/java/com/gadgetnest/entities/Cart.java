//package com.gadgetnest.entities;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import jakarta.persistence.*;
//import org.springframework.data.repository.cdi.Eager;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Table(name="cart")
//public class Cart {
//    @Id
//    @GeneratedValue(strategy= GenerationType.IDENTITY)
//    @Column(name="cart_id")
//    private Long cartId;
//
//    @Column(name="quantity")
//    private int quantity;
//
//    @Column(name="item_total")
//    private double itemTotal;
//
//    @Column(name="is_ordered")
//    private boolean isOrdered;
//
//    @OneToMany(mappedBy = "cart",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//    @JsonIgnore
//    private List<Products> p=new ArrayList<>();
//
//    public void addProducts(Products prdt){
//        p.add(prdt);
//        prdt.setCart(this);
//    }
//
//    @OneToOne
//    @JoinColumn(name = "order_id")
////    @MapsId
//    private Orders orders;
//
//    public Cart() {
//        super();
//    }
//
//    public Cart(Long cartId, int quantity, double itemTotal, boolean isOrdered) {
//        this.cartId = cartId;
//        this.quantity = quantity;
//        this.itemTotal = itemTotal;
//        this.isOrdered = isOrdered;
//    }
//
//    public Long getCartId() {
//        return cartId;
//    }
//
//    public void setCartId(Long cartId) {
//        this.cartId = cartId;
//    }
//
//    public int getQuantity() {
//        return quantity;
//    }
//
//    public void setQuantity(int quantity) {
//        this.quantity = quantity;
//    }
//
//    public double getItemTotal() {
//        return itemTotal;
//    }
//
//    public void setItemTotal(double itemTotal) {
//        this.itemTotal = itemTotal;
//    }
//
//    public boolean isOrdered() {
//        return isOrdered;
//    }
//
//    public void setOrdered(boolean ordered) {
//        isOrdered = ordered;
//    }
//
//    public Orders getOrders() {
//        return orders;
//    }
//
//    public void setOrders(Orders orders) {
//        this.orders = orders;
//    }
//
//    @Override
//    public String toString() {
//        return "Cart{" +
//                "cartId=" + cartId +
//                ", quantity=" + quantity +
//                ", itemTotal=" + itemTotal +
//                ", isOrdered=" + isOrdered +
//                '}';
//    }
//}
