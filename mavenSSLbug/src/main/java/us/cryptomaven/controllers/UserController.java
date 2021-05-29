package us.cryptomaven.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import us.cryptomaven.domain.User;
import us.cryptomaven.services.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserService us;

    @RequestMapping(value = "/user", method = RequestMethod.POST, consumes = "application/json")
    public User createUser(@RequestBody User user) {
        return us.createUser(user);
    }

}


