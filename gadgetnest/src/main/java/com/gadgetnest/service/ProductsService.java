package com.gadgetnest.service;

import com.gadgetnest.dto.ProductsDTO;
import com.gadgetnest.entities.Products;

import java.util.List;

public interface ProductsService {

    List<Products> displayAllProducts();

    String deleteProducts(Long pid);

    Products addProducts(ProductsDTO prdt);

    Products updateProducts(Products prdt);

    Products displayById(Long pid);

}
