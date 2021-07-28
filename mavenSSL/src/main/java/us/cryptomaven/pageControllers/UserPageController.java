package us.cryptomaven.pageControllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import us.cryptomaven.services.UserService;


@Controller
@CrossOrigin(origins = "*")
public class UserPageController {

    private UserService uServ;

    @Autowired
    public void setuServ(UserService uServ) { this.uServ = uServ; }

    @RequestMapping("/user/{id}")
    public String getUserByEmail(@PathVariable Long id, Model model) {
        model.addAttribute("user", uServ.getUserById(id));
        return "user";
    }

}
