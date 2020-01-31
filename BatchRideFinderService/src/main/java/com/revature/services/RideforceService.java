package com.revature.services;

import java.util.List;

import com.revature.entities.Rideforce;

public interface RideforceService {

	public Rideforce createRideforce(Rideforce associate);
	public Rideforce getRideforceById(int id);
	public  List<Rideforce> getRideforceByName(String name);
	public  List<Rideforce> getRideforceByPoints(int id);
	public List<Rideforce> getRideforceByNameAndPoints( String name,int id);
	public List<Rideforce> allRideforces();
	public Rideforce updateRideforce(Rideforce change);
	public boolean deleteRideforce(Rideforce associate);
}
