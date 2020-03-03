package net.groot.data2.service;

import java.util.List;

//Will get GrootsServiceStub
//Test GrootsServiceImp using GrootsServiceStub

public interface GrootService {
	public List<String> retrieveGroots(String groot);
	
	void deleteGroot(String groot);
}
