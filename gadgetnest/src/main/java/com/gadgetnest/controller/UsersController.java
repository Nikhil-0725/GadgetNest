package com.gadgetnest.controller;

import com.gadgetnest.dto.UsersDTO;
import com.gadgetnest.entities.Users;
import com.gadgetnest.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.lang.model.util.Elements;
import java.util.List;


@RestController
@RequestMapping(path="/user")
@CrossOrigin(origins ="http://localhost:3000")
public class UsersController {

    @Autowired
    private UsersService usersservice;

    @GetMapping("/display")
    public List<Users> displayAllUsers(){
        return usersservice.displayAllUsers();
    }

    @DeleteMapping("/delete/userid/{uid}")
    public String deleteUsers(@PathVariable Long uid){
        return usersservice.deleteUsers(uid);
    }

    @PostMapping("/add")
    public Users addUsers(@RequestBody UsersDTO usr){
        return usersservice.addUsers(usr);
    }

    @PutMapping("/update")
    public Users updateUsers(@RequestBody Users usr){
        return usersservice.updateUsers(usr);
    }

    @GetMapping("/login/{email}/{password}")
    public Users loginUsers(@PathVariable String email,@PathVariable String password){
        return usersservice.loginUsers(email,password);
    }
}
