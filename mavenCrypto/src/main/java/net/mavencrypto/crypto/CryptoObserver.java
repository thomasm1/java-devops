package net.mavencrypto.crypto;
 
//Represents each Observer that is monitoring changes in the subject

public class CryptoObserver implements Observer {
	
	private double ethPrice;
	private double btcPrice;
	private double hexPrice;
	private double linkPrice;
	private double xrpPrice;
	
	// Static used as a counter
	
	private static int observerIDTracker = 0;
	
	// Used to track the observers
	
	private int observerID;
	
	// Will hold reference to the StockGrabber object
	
	private Subject cryptoGrabber;
	
	public CryptoObserver(Subject cryptoGrabber){
		
		// Store the reference to the stockGrabber object so
		// I can make calls to its methods
		
		this.cryptoGrabber = cryptoGrabber;
		
		// Assign an observer ID and increment the static counter
		
		this.observerID = ++observerIDTracker;
		
		// Message notifies user of new observer
		
		System.out.println("New Observer " + this.observerID);
		
		// Add the observer to the Subjects ArrayList

		cryptoGrabber.register(this);
		
	}
	
	// Called to update all observers
	
	public void update(double ethPrice, double btcPrice, double hexPrice, double linkPrice, double xrpPrice) {
		
		this.ethPrice = ethPrice;
		this.btcPrice = btcPrice;
		this.hexPrice = hexPrice;
		this.linkPrice = linkPrice;
		this.xrpPrice = xrpPrice;
		
		printThePrices();
		
	}
	
	public void printThePrices(){
		
		System.out.println(observerID + "\nETH: " + ethPrice + "\nBTC: " + 
				btcPrice + "\nHEX: " + hexPrice + "\nLINK: " + linkPrice + "\nXRP: " + xrpPrice + "\n");
		
	}
	
}