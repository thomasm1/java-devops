package net.mavencrypto.random;

import org.apache.commons.math3.random.RandomDataGenerator;

public class DefaultRandomNumberGenerator implements RandomGenerator {

	
	
	public GeneratedRandomIdentifier generate() {		
		final int id = generateNumber();
		return GeneratedRandomIdentifier.valueOf(id, name());		
	}
	
	protected int generateNumber() {
		final RandomDataGenerator aRandomDataGenerator = new RandomDataGenerator();
		return aRandomDataGenerator.nextInt(5, 10);			
	}
	
	public String name() {
		return "Default Random Number Generator";
	}

}
