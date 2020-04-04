package net.groot.data2.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.groot.data2.model.User;
import net.groot.data2.service.UserService; 

@RestController
@RequestMapping("/api/users")
public class UserResource {

	@Autowired
	UserService userService;

	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public List<User> create(@RequestBody final User user) {

		userService.create(user);

		return userService.getAll();
	}

	@GetMapping
	public List<User> getAll() {
		return userService.getAll();
	}
}
