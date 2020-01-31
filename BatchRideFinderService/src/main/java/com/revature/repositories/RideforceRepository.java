package com.revature.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.entities.Rideforce;

@Repository
public interface RideforceRepository extends CrudRepository<Rideforce, Integer>{
	
	List<Rideforce> findByName(String name);
	List<Rideforce> findByPoints(int points);
	List<Rideforce> findByNameAndPoints(String name, int points);
}
