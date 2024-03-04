package com.gadgetnest.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    private String productName;

    private String productBrand;

    private String description;

    private double price;

    private int stockQty;

    private String imagePath;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="type_id")
    private Types types;

//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name="cart_id")
//    private Cart cart;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="order_id")
    private Orders orders;


    public Products() {
        super();
    }

    public Products(Long productId, String productName, String productBrand, String description, double price, int stockQty, String imagePath) {
        this.productId = productId;
        this.productName = productName;
        this.productBrand = productBrand;
        this.description = description;
        this.price = price;
        this.stockQty = stockQty;
        this.imagePath = imagePath;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductBrand() {
        return productBrand;
    }

    public void setProductBrand(String productBrand) {
        this.productBrand = productBrand;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getStockQty() {
        return stockQty;
    }

    public void setStockQty(int stockQty) {
        this.stockQty = stockQty;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public Types getTypes() {
        return types;
    }

    public void setTypes(Types types) {
        this.types = types;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

//    public Cart getCart() {
//        return cart;
//    }
//
//    public void setCart(Cart cart) {
//        this.cart = cart;
//    }

    @Override
    public String toString() {
        return "Products{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", productBrand='" + productBrand + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", stockQty=" + stockQty +
                ", imagePath='" + imagePath + '\'' +
                '}';
    }
}
