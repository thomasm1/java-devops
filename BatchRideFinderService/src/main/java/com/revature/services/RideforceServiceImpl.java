package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entities.Rideforce;
import com.revature.repositories.RideforceRepository;

@Service
public class RideforceServiceImpl implements RideforceService {

	@Autowired
	RideforceRepository ar;

	@Override
	public Rideforce createRideforce(Rideforce rideforce) {
		System.out.println("Service layer: " + rideforce);
		return ar.save(rideforce);
	}

	@Override
	public Rideforce getRideforceById(int id) {
		return ar.findById(id).get();
	}
	
	@Override
	public List<Rideforce> getRideforceByName(String name) {
		return ar.findByName(name);
	}

	@Override
	public List<Rideforce> getRideforceByPoints(int points) {
		return ar.findByPoints(points);
	} 
	@Override
	public List<Rideforce> getRideforceByNameAndPoints(String name, int points) { 
		return ar.findByNameAndPoints(name, points);
	}
	@Override
	public List<Rideforce> allRideforces() {
		return (List<Rideforce>) ar.findAll();
	}

	@Override
	public Rideforce updateRideforce(Rideforce change) {
		return ar.save(change);
	}

	@Override
	public boolean deleteRideforce(Rideforce rideforce) {
		try {
			ar.delete(rideforce);
			return true;

		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
	}
 

}
