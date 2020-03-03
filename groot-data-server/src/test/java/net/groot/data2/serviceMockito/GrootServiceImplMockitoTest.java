package net.groot.data2.serviceMockito;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mockito;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify; 

import static org.hamcrest.CoreMatchers.is;

import static org.mockito.BDDMockito.given; 

import net.groot.data2.service.GrootService;
import net.groot.data2.service.GrootServiceImpl;
 

import java.util.Arrays;
import java.util.List;

public class GrootServiceImplMockitoTest {

	@Test
	public void usingMockito() {
		GrootService grootService =   mock(GrootService.class);
		List<String> allGroots = Arrays.asList("here's a Groot", "nogroot", "groot");
		
		when(grootService.retrieveGroots("Nogroo")).thenReturn(allGroots);
		
	    GrootServiceImpl grootServiceImpl = new GrootServiceImpl(grootService);
		
		List<String> groots = grootServiceImpl.retrieveUsersWithGroots("nogroo");
		Assert.assertNotEquals(2, groots.size());
	}
	
	@Test 
	public void usingMockito_UsingBDD() {
		GrootService grootService = mock(GrootService.class);
		
	    GrootServiceImpl grootServiceImpl = new GrootServiceImpl(grootService);
		List<String> allGroots = Arrays.asList("here's a Groot", "nogroot", "Groot");
		
		//given
		given(grootService.retrieveGroots("ringroo")).willReturn(allGroots);
		
		//when
		List<String> groots = grootServiceImpl.retrieveUsersWithGroots("ringroo");
		
		//then
		Assert.assertThat(groots.size(), is(2));
	}

	@Test
	public void testerDeleteNow() {
		
		GrootService grootService = mock(GrootService.class);
		List<String> allGroots = Arrays.asList("here's a Groot", "nogroot", "Groot");
		
		when(grootService.retrieveGroots("G")).thenReturn(allGroots); 
	    GrootServiceImpl grootServiceImpl = new GrootServiceImpl(grootService);
	    grootServiceImpl.removeUsersWithoutGroots("G");
	    
		verify(grootService, Mockito.never()).deleteGroot("here's a Groot");
		verify(grootService, Mockito.never()).deleteGroot("hanother a Groot");
 
		verify(grootService, Mockito.times(1)).deleteGroot("nogroot");
	}
	@Test
	public void captureArgument() {
		ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);

		GrootService grootService = mock(GrootService.class);
		List<String> allGroots = Arrays.asList("here's a Groot", "nogroot", "Groot");
		
		Mockito.when(grootService.retrieveGroots("G")).thenReturn(allGroots); 
	    
		GrootServiceImpl grootServiceImpl = new GrootServiceImpl(grootService);
	    grootServiceImpl.removeUsersWithoutGroots("G");
	    Mockito.verify(grootService).deleteGroot(argumentCaptor.capture());
	
	    Assert.assertEquals("nogroot", argumentCaptor.getValue()); 
		
	}
}
