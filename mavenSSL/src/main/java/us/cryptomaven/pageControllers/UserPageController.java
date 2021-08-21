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
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserPageController {

    private UserService uServ;

    @Autowired
    public void setUserService(UserService uServ) { this.uServ = uServ; }

    @RequestMapping("/{id}")
    public String getUserByEmail(@PathVariable Long id, Model model) {
        model.addAttribute("user", uServ.getUserById(id));
        return "user";
    }

    @RequestMapping("")
    public String displayUsers(Model model) {
        Iterable<User> users = uServ.listUsers();
        model.addAttribute("users", users);
        return "/list-users";
    }

    @RequestMapping(path="/new", method= RequestMethod.GET)
    public String displayUserForm(Model model) {

        User anUser = new User();

        model.addAttribute("user", anUser);

        return "new-user";
    }

    @RequestMapping (path="/save", method= RequestMethod.POST)
    public String createUser(Model model, @Valid User user, Errors errors) {

        if(errors.hasErrors())
            return "user/new-user";

        // save to the database using an user crud repository
        uServ.addUser(user);

        return "redirect:/user";
    }

    @RequestMapping("/update")
    public String displayUserUpdateForm(@RequestParam("id") long theId, Model model) {

        User theEmp = uServ.getUserById(theId);

        model.addAttribute("user", theEmp);


        return "users/new-user";
    }

    @RequestMapping("delete")
    public String deleteUser(@RequestParam("id") long theId, Model model) {
        User theEmp = uServ.getUserById(theId);
        uServ.deleteUserById(theId);
        return "redirect:/user";
    }
}
