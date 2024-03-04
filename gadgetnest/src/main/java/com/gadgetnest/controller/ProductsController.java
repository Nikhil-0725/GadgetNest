package com.gadgetnest.controller;

import com.gadgetnest.dto.ProductsDTO;
import com.gadgetnest.entities.Products;
import com.gadgetnest.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Default Controller for Products
@RestController
@RequestMapping(path = "/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductsController {

    @Autowired
    private ProductsService productsservice;


    @GetMapping("/display")
    public List<Products> displayAllProducts(){
        return productsservice.displayAllProducts();
    }


    @DeleteMapping("/delete/productid/{pid}")
    public String deleteProducts(@PathVariable Long pid){
       return productsservice.deleteProducts(pid);
    }

    @PostMapping("/add")
    public Products addProducts(@RequestBody ProductsDTO prdt){
        return productsservice.addProducts(prdt);
    }

    @PutMapping("/update")
    public Products updateProducts(@RequestBody  Products prdt){
        return productsservice.updateProducts(prdt);
    }

    @GetMapping("/display/{pid}")
    public Products displayById(@PathVariable Long pid){
        return productsservice.displayById(pid);
    }
}
