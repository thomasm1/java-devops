package net.mavencrypto.crypto;
 
import java.text.DecimalFormat;

public class GetTheCrypto implements Runnable{
	
	// Could be used to set how many seconds to wait
	// in Thread.sleep() below
	
	// private int startTime; 
	private String crypto;
	private double price;
	
	// Will hold reference to the CryptoGrabber object
	
	private Subject cryptoGrabber;
	
	public GetTheCrypto(Subject cryptoGrabber, int newStartTime, String newCrypto, double newPrice){
		
		// Store the reference to the cryptoGrabber object so
		// I can make calls to its methods
				
		this.cryptoGrabber = cryptoGrabber;
		
		// startTime = newStartTime;  Not used to have variable sleep time
		crypto = newCrypto;
		price = newPrice;
		
	}
	
	public void run(){
		
		for(int i = 1; i <= 20; i++){
		
			try{
				
				// Sleep for 2 seconds
				Thread.sleep(2000);
				
				// Use Thread.sleep(startTime * 1000); to 
				// make sleep time variable
			}
			catch(InterruptedException e)
			{}
			
			// Generates a random number between -.03 and .03
			
			double randNum = (Math.random() * (.06)) - .03;
			
			// Formats decimals to 2 places
			
			DecimalFormat df = new DecimalFormat("#.##");
			
			// Change the price and then convert it back into a double
			
	        price = Double.valueOf(df.format((price + randNum)));
			
			if(crypto == "ETH") ((CryptoGrabber) cryptoGrabber).setETHPrice(price);
			if(crypto == "BTC") ((CryptoGrabber) cryptoGrabber).setBTCPrice(price);
			if(crypto == "HEX") ((CryptoGrabber) cryptoGrabber).setHEXPrice(price);
			
			System.out.println(crypto + ": " + df.format((price + randNum)) + 
					" " + df.format(randNum));
			
			System.out.println();
		
		}
	}
	
}