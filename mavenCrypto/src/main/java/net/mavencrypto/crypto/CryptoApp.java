package net.mavencrypto.crypto;

import net.mavencrypto.utils.CryptoFilter;

public class CryptoApp {

	public static void main(String[] args){

		cryptos();
//	   filter();

	}
	public static void filter() {
		int[] levels1 = {5,3,6,7,4};
		CryptoFilter result = new CryptoFilter();
		result.getResult(levels1);
	}

	public static void cryptos() {
		/*
		 Create the Subject object
		 It will handle updating all observers
		 as well as deleting and adding them
		*/

		double ethPrice = 0;
		double btcPrice = 0;
		double hexPrice = 0;
		double linkPrice = 0;
		double xrpPrice = 0;

		CryptoGrabber cryptoGrabber = new CryptoGrabber(ethPrice, btcPrice, hexPrice, linkPrice, xrpPrice);

		// Create an Observer that will be sent updates from Subject

		CryptoObserver observer1 = new CryptoObserver(cryptoGrabber);

		cryptoGrabber.setETHPrice(1197);
		cryptoGrabber.setBTCPrice(33060);
		cryptoGrabber.setHEXPrice(.01240);
		cryptoGrabber.setLINKPrice(24.099);
		cryptoGrabber.setXRPPrice(.4940);

		CryptoObserver observerHigh = new CryptoObserver(cryptoGrabber);

		cryptoGrabber.setETHPrice(1497);
		cryptoGrabber.setBTCPrice(35060);
		cryptoGrabber.setHEXPrice(.02240);
		cryptoGrabber.setLINKPrice(29.099);
		cryptoGrabber.setXRPPrice(.6240);

		// Delete one of the observers
		// cryptoGrabber.unregister(observerHigh);

		cryptoGrabber.setETHPrice(1197);
		cryptoGrabber.setBTCPrice(33060);
		cryptoGrabber.setHEXPrice(.01240);
		cryptoGrabber.setLINKPrice(24.099);
		cryptoGrabber.setXRPPrice(.4940);

		// Create 3 threads using the Runnable interface
		// GetTheCrypto implements Runnable, so it doesn't waste
		// its one extendable class option

		Runnable getETH = new GetTheCrypto(cryptoGrabber, 2, "ETH", 1197);
		Runnable getBTC = new GetTheCrypto(cryptoGrabber, 2, "BTC", 33060);
		Runnable getHEX = new GetTheCrypto(cryptoGrabber, 2, "HEX", .01240);
		Runnable getLINK = new GetTheCrypto(cryptoGrabber, 2, "Link", 24.099); // lowercase check
		Runnable getXRP = new GetTheCrypto(cryptoGrabber, 2, " xrp ", .4940); // trim check

		// Call for the code in run to execute

		new Thread(getETH).start();
		new Thread(getBTC).start();
		new Thread(getHEX).start();
		new Thread(getLINK).start();
		new Thread(getXRP).start();

	}
	
}