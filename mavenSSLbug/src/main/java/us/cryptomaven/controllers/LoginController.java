package us.cryptomaven.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import us.cryptomaven.commands.LoginCommand;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/login")
public class LoginController {

    @RequestMapping("/")
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
}
