package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.aspects.Authorized;
import com.revature.entities.Rideforce;
import com.revature.services.RideforceService;

@RestController
public class RideforceController {

	@Autowired
	RideforceService as;

	@RequestMapping(value = "/rideforce", method = RequestMethod.POST, consumes = "application/json") 
	@CrossOrigin(origins = "*")
	public Rideforce createRideforce(@RequestBody Rideforce rideforce) {
		System.out.println(rideforce);
		return as.createRideforce(rideforce);
	}

	@GetMapping(value = "/rideforce") 
	@CrossOrigin(origins = "*")
	public List<Rideforce> allRideforces() {
		return as.allRideforces();
	}

	@GetMapping(value = "/rideforce/search") 
	@CrossOrigin(origins = "")
	public List<Rideforce> getRideforceByName(@RequestParam String name, @RequestParam Integer points) {
		if (name != null && points != null) {
			return as.getRideforceByName(name);
		} else if (name != null) {
			return as.getRideforceByName(name);
		} else {
			return as.getRideforceByNameAndPoints(name, points);
		}
	}
	
	@PostMapping(value = "/login") 
	@CrossOrigin(origins = "*")
	public boolean loginRideforce(@RequestBody Rideforce rideforce) {
		if (as.getRideforceByNameAndPoints(rideforce.getName(), rideforce.getPoints()) != null) {
			return true;
		} else {
			return false;
		} 
	};
	// 	String username = httpSession.getAttribute("login_attempt_username","password");
	
	@GetMapping(value = "/rideforce/{id}") 
	@CrossOrigin(origins = "*")
	public String getRideforce(@PathVariable("id") int id) {
		return as.getRideforceById(id).toString();
	}

	@PutMapping(value = "/rideforce", consumes = "application/json") 
	@CrossOrigin(origins = "*")
	public Rideforce updateRideforce(@RequestBody Rideforce change) {
		return as.updateRideforce(change);
	}
	
	@Authorized
	@DeleteMapping(value = "/rideforce/{id}")
//	@CrossOrigin(origins = "http://localhost:8080")
	@CrossOrigin(origins = "*")
	public boolean removeRideforce(@PathVariable("id") int id) {
		return as.deleteRideforce(as.getRideforceById(id));
	}

}
