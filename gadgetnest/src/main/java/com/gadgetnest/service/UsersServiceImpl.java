package com.gadgetnest.service;

import com.gadgetnest.dao.RolesDao;
import com.gadgetnest.dao.UsersDao;
import com.gadgetnest.dto.UsersDTO;
import com.gadgetnest.entities.Products;
import com.gadgetnest.entities.Roles;
import com.gadgetnest.entities.Types;
import com.gadgetnest.entities.Users;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersServiceImpl implements UsersService{

    @Autowired
    private UsersDao usersdao;

    @Autowired
    ModelMapper modelmapper;

    @Autowired
    private RolesDao rolesdao;

    @Override
    public List<Users> displayAllUsers() {
        return usersdao.findAllUsersNonValues();
    }

    @Override
    public String deleteUsers(Long uid) {
        Users users=new Users();
        users.setUserId(uid);
        usersdao.delete(users);
        return "Product deleted with id : "+uid;
    }

    @Override
    public Users addUsers(UsersDTO usr) {
        Roles r=rolesdao.findById(usr.getRoleId()).orElseThrow();
        Users u=modelmapper.map(usr,Users.class);
        if(r!=null){
            r.addUsers(u);
            u.setRoles(r);
        }
        return usersdao.save(u);
    }

    @Override
    public Users updateUsers(Users usr) {
        return usersdao.save(usr);
    }

    @Override
    public Users loginUsers(String email, String password) {
        Users u=usersdao.findByEmail(email);
        if(!(u.getPassword().equals(password))){
            throw new RuntimeException("User not found!");
//            return null;
        }
        return u;
    }
}
