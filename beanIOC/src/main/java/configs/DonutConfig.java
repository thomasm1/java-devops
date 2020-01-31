package configs;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
//import org.springframework.stereotype.Component;

import beans.BlueberryJelly;
import beans.Donut;
import beans.Jelly;
import beans.PeanutButterJelly;

// @Component /* this should be managed by Spring IOC container */
@Configuration /*
				 * tells Spring what type of class/role this serves in Spring IOC
				 * (applicationContext)
				 */
public class DonutConfig {
	/*
	 * This Class contains information necessary to help create the Spring IOC
	 * Container
	 */

	@Bean // belongs on a method, it says this method is used to return a BEAN
	@Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
	public Jelly getBlueberryJelly() {
		System.out.println("DonutConfig: Getting you a blueberry jelly");

		Jelly blueberry = new BlueberryJelly();
		blueberry.setFlavor("Blueberry");
		;
		return blueberry;
	}

	@Bean // belongs on a method, it says this method is used to return a BEAN
//	@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
	public Jelly getPeanutbutterJelly() {
		System.out.println("Getting you a NEW pb");

		/*
		 * This is an example of a Setter injection fields(s) was (erw)set using the
		 * setter
		 */
		Jelly peanutbutter = new PeanutButterJelly();
		peanutbutter.setFlavor("peanutbutter with a baseball-bat");
		return peanutbutter;
	}

	@Bean
	@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
	public Donut getBlueberryDonut() {
		/*  
		 * Constructor Injection - all noduts require a Jelly (is a
		 * dependency) We can pass in that dependency when we first create the object in
		 * its constructor
		 */ 
		return new Donut("BlueBerryBlast", 2.75, this.getBlueberryJelly());
	}

	@Bean
	@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
	public Donut getPeanutbutterDonut() {
		Donut pbdonut = new Donut();
		
		// Setter injection
		pbdonut.setName("Baseball Bat");
		pbdonut.setCost(3.25);
		pbdonut.setJelly(this.getPeanutbutterJelly());

		return pbdonut;
	}

}
