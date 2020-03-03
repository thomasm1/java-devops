package net.groot.data2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.groot.data2.model.User;
import net.groot.data2.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public void create(User user) {
		userRepository.save(user);
	}
	
	public List<User> getAll() {
		return userRepository.findAll();
	}
}
