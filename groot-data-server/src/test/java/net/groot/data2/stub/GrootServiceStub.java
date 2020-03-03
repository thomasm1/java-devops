package net.groot.data2.stub;

import java.util.List;
import java.util.Arrays;

//import org.assertj.core.util.Arrays;

import net.groot.data2.service.GrootService;

public class GrootServiceStub implements GrootService {
 
	public List<String> retrieveGroots(String groot) { 
		return Arrays.asList("This has a Groot", "no groo", "Groot-ified");
	}

	@Override
	public void deleteGroot(String groot) {
		// TODO Auto-generated method stub 
	}

}
