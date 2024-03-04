package com.gadgetnest.dao;

import com.gadgetnest.entities.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductsDao extends JpaRepository<Products, Long> {
    @Query("select p from Products p where p.types is not null")
    List<Products> findAllProductsNonValues();
}
