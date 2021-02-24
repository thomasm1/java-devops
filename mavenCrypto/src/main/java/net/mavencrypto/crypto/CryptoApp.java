package net.mavencrypto.crypto;

import net.mavencrypto.crypto.CryptoFilter;
import java.util.Arrays;

public class CryptoApp {

	public static void main(String[] args){

//		cryptos();
	 filter();
	}
	public static void filter() {
		int[] levels1 = {5,3,6,7,4};
		CryptoFilter.getResult(levels1);
	}

	public static void cryptos() {
		/*
		 Create the Subject object
		 It will handle updating all observers
		 as well as deleting and adding them
		*/

		CryptoGrabber cryptoGrabber = new CryptoGrabber();

		// Create an Observer that will be sent updates from Subject

		CryptoObserver observer1 = new CryptoObserver(cryptoGrabber);

		cryptoGrabber.setETHPrice(1197);
		cryptoGrabber.setBTCPrice(33060);
		cryptoGrabber.setHEXPrice(.01240);

		CryptoObserver observer2 = new CryptoObserver(cryptoGrabber);

		cryptoGrabber.setETHPrice(1197);
		cryptoGrabber.setBTCPrice(33060);
		cryptoGrabber.setHEXPrice(.01240);

		// Delete one of the observers

		// cryptoGrabber.unregister(observer2);

		cryptoGrabber.setETHPrice(1197);
		cryptoGrabber.setBTCPrice(33060);
		cryptoGrabber.setHEXPrice(.01240);

		// Create 3 threads using the Runnable interface
		// GetTheCrypto implements Runnable, so it doesn't waste
		// its one extendable class option

		Runnable getETH = new GetTheCrypto(cryptoGrabber, 2, "ETH", 1197);
		Runnable getBTC = new GetTheCrypto(cryptoGrabber, 2, "BTC", 33060);
		Runnable getHEX = new GetTheCrypto(cryptoGrabber, 2, "HEX", .01240);

		// Call for the code in run to execute

		new Thread(getETH).start();
		new Thread(getBTC).start();
		new Thread(getHEX).start();

	}
	
}