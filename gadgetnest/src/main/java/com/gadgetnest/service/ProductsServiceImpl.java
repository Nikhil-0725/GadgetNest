package com.gadgetnest.service;

import com.gadgetnest.dto.ProductsDTO;
import com.gadgetnest.dao.ProductsDao;
import com.gadgetnest.dao.TypesDao;
import com.gadgetnest.entities.Products;
import com.gadgetnest.entities.Types;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ProductsServiceImpl implements ProductsService {

    @Autowired
    private ProductsDao productsdao;

    @Autowired
    private TypesDao typesdao;

    @Autowired
    ModelMapper modelmapper;

    @Override
    public List<Products> displayAllProducts() {
        return productsdao.findAllProductsNonValues();
    }

    @Override
    public String deleteProducts(Long pid) {
        Products products=new Products();
        products.setProductId(pid);
        productsdao.delete(products);
        return "Product deleted with id : "+pid;
    }

    @Override
    public Products addProducts(ProductsDTO prdt) {
        Types t=typesdao.findById(prdt.getTypeId()).orElseThrow();
        Products p=modelmapper.map(prdt,Products.class);
        if(t!=null){
            t.addProducts(p);
            p.setTypes(t);
        }
        return productsdao.save(p);
    }

    @Override
    public Products updateProducts(Products prdt) {
        return productsdao.save(prdt);
    }


    @Override
    public Products displayById(Long pid) {
        Products p=productsdao.findById(pid).orElseThrow();
        return p;
    }



}
