package us.cryptomaven.pageControllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import us.cryptomaven.domain.User;
import us.cryptomaven.services.UserService;

import javax.validation.Valid;


@Controller
@RequestMapping("/user")
public class UserPageController {

    private UserService uServ;

    @Autowired
    public void setuServ(UserService uServ) { this.uServ = uServ; }

    @RequestMapping("/{id}")
    public String getUserByEmail(@PathVariable Long id, Model model) {
        model.addAttribute("user", uServ.getUserById(id));
        return "user";
    }
    @RequestMapping("")
    public String displayUsers(Model model) {
        Iterable<User> users = uServ.listUsers();
        model.addAttribute("users", users);
        return "list-users";
    }

    @RequestMapping("/new")
    public String displayUserForm(Model model) {

        User anUser = new User();

        model.addAttribute("user", anUser);

        return "new-user";
    }

    @RequestMapping(path = "/save", method = RequestMethod.POST)
    public String createUser(Model model,  User user, Errors errors) {

        if(errors.hasErrors())
            return "new-user";

        // save to the database using an user crud repository
        uServ.addUser(user);

        return "redirect:/user";
    }

    @RequestMapping(path ="/update", method = RequestMethod.GET)
    public String displayUserUpdateForm(@RequestParam("id") long theId, Model model) {

        User u = uServ.getUserById(theId);

        model.addAttribute("user", u);


        return "new-user";
    }

    @RequestMapping(path = "/delete", method = RequestMethod.DELETE)
    public String deleteUser(@RequestParam("id") long theId, Model model) {
//        User theEmp = uServ.getUserById(theId);
        uServ.deleteUserById(theId);
        return "redirect:/user";
    }
}
