package net.groot.data2.serviceStub;

import java.util.List;

import org.junit.Assert;
import org.junit.jupiter.api.Test;

import net.groot.data2.service.GrootService;
import net.groot.data2.service.GrootServiceImpl;
import net.groot.data2.stub.GrootServiceStub;

public class GrootServiceImplStubTest{
	 
	@Test
	public void usingGrootStub() {
		 
		GrootService grootServiceStub = new GrootServiceStub();
		
		GrootServiceImpl grootServiceImpl = new GrootServiceImpl(grootServiceStub);
		
		List<String> groots = grootServiceImpl.retrieveUsersWithGroots("nogroo");
		Assert.assertEquals(2, groots.size());
	}
}
