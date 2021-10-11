package us.cryptomaven.pageControllers;

import us.cryptomaven.commands.LoginCommand;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import us.cryptomaven.domain.User_;
import us.cryptomaven.services.UserService;

import javax.validation.Valid;


@Controller
public class LoginController {

    private UserService uServ;

    @RequestMapping("/login")
    public String showLoginForm(Model model){

        model.addAttribute("loginCommand", new LoginCommand());

        return "loginform";
    }

    @RequestMapping("logout-success")
    public String yourLoggedOut(){

        return "logout-success";
    }

//    @RequestMapping(value = "/dologin", method = RequestMethod.POST)
    public String doLogin(@Valid LoginCommand loginCommand, BindingResult bindingResult){

        if(bindingResult.hasErrors()){
            return "loginform";
        }

        return "redirect:index";
    }
    @RequestMapping("/submit")
 public User_ getUserByEmailAndPassword(String email, String password){
        return uServ.getUserByEmailAndPassword(email, password);
 };

}
