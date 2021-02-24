package net.mavencrypto.crypto;

//The Observers update method is called when the Subject changes

public interface Observer {
	
	public void update(double ethPrice, double btcPrice, double hexPrice, double linkPrice, double xrpPrice);
	
}
