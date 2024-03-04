package com.gadgetnest.service;

import com.gadgetnest.dto.UsersDTO;
import com.gadgetnest.entities.Users;

import java.util.List;

public interface UsersService {

    List<Users> displayAllUsers();

    String deleteUsers(Long uid);

    Users addUsers(UsersDTO usr);

    Users updateUsers(Users usr);

    Users loginUsers(String email,String password);

}
