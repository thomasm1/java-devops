//package net.groot.data2.resourceXML;
// 
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import javax.ws.rs.core.MediaType;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import net.groot.data2.model.User;
//import net.groot.data2.service.UserService; 
//
//@RestController
//@RequestMapping("/rest/user")
//public class UserResourceXML {
//
//	@Autowired
//	UserService userService;
//
//	@PostMapping(produces = MediaType.APPLICATION_XML, consumes = MediaType.APPLICATION_XML)
//	public List<User> create(@RequestBody final User user) {
//
//		userService.create(user);
//
//		return userService.getAll();
//	}
//
//	@GetMapping
//	public List<User> getAll() {
//		return userService.getAll();
//	}
//}
