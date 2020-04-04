package net.groot.data2.service;
 
import java.util.ArrayList;
import java.util.List;

import net.groot.data2.service.GrootService;

public class GrootServiceImpl{
	private GrootService grootService;
	
	public GrootServiceImpl(GrootService grootService) {
//		super();	
		this.grootService = grootService;
	}
	
	public List<String> retrieveUsersWithGroots(String user) {
		List<String> filteredGroots = new ArrayList<String>();
		List<String> allGroots = grootService.retrieveGroots(user);
		
		for (String groot: allGroots) {
			if (groot.contains("Groot")) {
				filteredGroots.add(groot);
			}
		}
		return filteredGroots;
	}
	
	public void removeUsersWithoutGroots(String user) {

		List<String> allGroots = grootService.retrieveGroots(user);
		
		for (String groot: allGroots) {
			if (!groot.contains("Groot")) {
				grootService.deleteGroot(groot);
			}
		}
		
	}
	
}
