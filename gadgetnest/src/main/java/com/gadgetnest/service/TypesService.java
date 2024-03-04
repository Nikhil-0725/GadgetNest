package com.gadgetnest.service;

import com.gadgetnest.dto.TypesDTO;
import com.gadgetnest.entities.Types;

import java.util.List;

public interface TypesService {

    List<Types> displayAllTypes();

    String deleteTypes(Long tid);

    Types addTypes(TypesDTO typ);

    Types updateTypes(Types types);
}
