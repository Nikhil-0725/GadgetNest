package com.gadgetnest.service;

import com.gadgetnest.dto.TypesDTO;
import com.gadgetnest.dao.TypesDao;
import com.gadgetnest.entities.Types;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class TypesServiceImpl implements TypesService {

    @Autowired
    private TypesDao typedao;

    @Autowired
    ModelMapper modelmapper;

    @Override
    public List<Types> displayAllTypes() {
        return typedao.findAll();
    }

    @Override
    public String deleteTypes(Long tid) {
        if(typedao.existsById(tid)) {
            typedao.deleteById(tid);
            return "Product Type deleted of id : "+tid;
        }
        return "Enter valid Product Type.";
    }

    @Override
    public Types addTypes(TypesDTO typ) {
        Types t=modelmapper.map(typ, Types.class);
        return typedao.save(t);
    }

    @Override
    public Types updateTypes(Types types) {
//        Types t=typedao.findById(tid).orElseThrow();
//        if(t!=null){
//            t.setTypeName(newname);
//        }
        return typedao.save(types);
    }

}
