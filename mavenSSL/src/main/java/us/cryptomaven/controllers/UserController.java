package us.cryptomaven.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import us.cryptomaven.domain.User_;
import us.cryptomaven.repositories.UserRepository;
import us.cryptomaven.services.UserService;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserService uServ;

    @Autowired
    UserRepository userRepository;

    @RequestMapping(path = "/user/{id}", method = RequestMethod.GET)
    public User_ getEmployeeById(@PathVariable("id") Long id) {
        return uServ.getUserById(id);
    }


    @RequestMapping(value = "/users", method = RequestMethod.GET )
    public Iterable<User_> getUsers() {
        return uServ.getUsers();
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST, consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public User_ createUser(@RequestBody User_ user) {
        return uServ.addUser(user);
    }


    @RequestMapping(value = "/users", method = RequestMethod.PUT, consumes = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public User_ update(@RequestBody@Valid User_ user) {
        return uServ.updateUserById(user);
    }

    @RequestMapping(path = "/user/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") Long id) {
        try {
            uServ.deleteUserById(id);
        }
        catch(EmptyResultDataAccessException e) {
System.out.println(e);
        }
    }



}


