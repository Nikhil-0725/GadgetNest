package com.gadgetnest.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "types")
public class Types{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int typeId;

    private String typeName;

    @OneToMany(mappedBy = "types",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Products> p=new ArrayList<>();


    public void addProducts(Products prdt){
        p.add(prdt);
        prdt.setTypes(this);
    }


    public Types() {
        super();
    }

    public Types(int typeId, String typeName) {
        this.typeId = typeId;
        this.typeName = typeName;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    @Override
    public String toString() {
        return "Types{" +
                "typeId=" + typeId +
                ", typeName='" + typeName + '\'' +
                '}';
    }
}
