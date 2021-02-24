package net.mavencrypto.crypto;
 
import java.util.ArrayList;

//Uses the Subject interface to update all Observers

public class CryptoGrabber implements Subject{
	
	private ArrayList<Observer> observers;
	private double ethPrice;
	private double btcPrice;
	private double hexPrice;
	private double linkPrice;
	private double xrpPrice;
	
	public CryptoGrabber(double ethPrice, double btcPrice, double hexPrice, double linkPrice, double xrpPrice){

		this.ethPrice = ethPrice;
		this.btcPrice = btcPrice;
		this.hexPrice = hexPrice;
		this.linkPrice = linkPrice;
		this.xrpPrice = xrpPrice;

		// Creates an ArrayList to hold all observers
		observers = new ArrayList<Observer>();

	}
	
	public void register(Observer newObserver) {
		
		// Adds a new observer to the ArrayList
		
		observers.add(newObserver);
		
	}

	public void unregister(Observer deleteObserver) {
		
		// Get the index of the observer to delete
		
		int observerIndex = observers.indexOf(deleteObserver);
		
		// Print out message (Have to increment index to match)
		
		System.out.println("Observer " + (observerIndex+1) + " deleted");
		
		// Removes observer from the ArrayList
		
		observers.remove(observerIndex);
		
	}

	public void notifyObserver() {
		
		// Cycle through all observers and notifies them of
		// price changes
		
		for(Observer observer : observers){
			
			observer.update(ethPrice, btcPrice, hexPrice, linkPrice, xrpPrice);
			
		}
	}
	
	// Change prices for all stocks and notifies observers of changes
	
	public void setETHPrice(double newETHPrice){
		
		this.ethPrice = newETHPrice;
		
		notifyObserver();
		
	}
	
	public void setBTCPrice(double newBTCPrice){
		
		this.btcPrice = newBTCPrice;
		
		notifyObserver();
		
	}

	public void setHEXPrice(double newHEXPrice){
	
		this.hexPrice = newHEXPrice;
	
		notifyObserver();
	
	}
	public void setLINKPrice(double newLINKPrice){

		this.linkPrice = newLINKPrice;

		notifyObserver();

	}
	public void setXRPPrice(double newXRPPrice){

		this.xrpPrice = newXRPPrice;

		notifyObserver();

	}
}