package systemUser;

import java.io.File;
import java.io.FileNotFoundException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

import logger.LogGround;
import models.Car;
import models.Groot;
import models.User;
//import models.Offer;
//import models.User;
import service.CarService;
import service.DataService;
import util.HashtableChain;
//import service.OfferService;
//import service.UserService;
import util.HashtableProbe;
import util.Tree;

public class UserMain {

    // main class here
	
	public static void main(String[] args) throws SQLException {

		LogGround.logger();
		System.out.println("#0 log ...Logging by Log4j2.\n");/// #0 log

		/// #1 check for Oracle JDBC Driver 
		try {
			System.out.println("# Success! driver: " +Class.forName("oracle.jdbc.driver.OracleDriver"));
			System.out.println("1 ..found Oracle JDBC Driver...ready to connect.");
		} catch (ClassNotFoundException e) {
			System.out.println("oops, Driver not found :-O");
		}
		try { 
			System.out.println("#2 Loading frontConsole ");
			frontConsole();
		} catch (Exception e) {
			UserMain.main(args);
		}
		

	}
	// console work 6/22
	public static Map<Integer, Groot> team = new HashMap<Integer, Groot>();
	
	 static {
		Groot p1 = new Groot(1, "Bulbasaur", "Grass/Poision");		
		Groot p2 = new Groot(2, "Pikachu", "Electric");
		Groot p3 = new Groot(3, "Jigglypuff", "Fairy");
		
		team.put(1, p1);
		team.put(2, p2);
		team.put(3, p3);
	}
		//  TODO;
	 	// CLI input converting string numbers into array of integers. 
	public static void dataStructures() {
		int[] numbers = { 59382, 43, 6894, 500, 99, -58 };
		int[] buckets = DataService.hashNums(numbers);
		System.out.println("Sundry hashNums Practice Operations ");
		System.out.print(buckets.toString());  
		frontConsole();
	}
	 
	public static void carlotView() {
		List<Car> carList = CarService.getAllCarsCust(); // Customer view of carlot.
		System.out.println("\nWelcome to All-Star e-Cars!\n  " + ">>>> Now featuring 2020 e-Cars!! <<<<");

		System.out.println(carList);
		frontConsole();
	}

	public static void frontConsole() {

		String fileName = "C://w/www/java-devops/project0/src/main/java/systemUser/scannertext.txt";

		try {
			File textFile = new File(fileName);
			Scanner scanText = new Scanner(textFile);
			int value = scanText.nextInt(); 
			System.out.println("\n    #=============#");
			System.out.println("    Welcome VIP # " + value);
			System.out.println("    #=============#");
			int value2 = scanText.nextInt();
			System.out.println("\n#====All-Star_E-Cars==with " + value2 + " locations!");
			System.out.println(
					"\n1.) Log in press '1'.\n" + "2.) Register (get great deals and make offers), press '2'"
							+ "\n3.) Browse the lot,  press '3'." + 
							"\n4.) Data Structures Manipulation,  press '4'." + 
							"\n\nExit, press '0'.");
			scanText.close();
			
		} catch (FileNotFoundException e) {
			System.out.println("Welcome script file not found: " + fileName.toString());
		}

		try {
			Scanner newScan = new Scanner(System.in);
			boolean hasNextInt = newScan.hasNextInt();
			int val = newScan.nextInt();
			try {
				/// Validate 
				if (val < 0 | val > 4 | !hasNextInt) {
					System.out.println("Please enter valid choices: 0-3");
					UserMain.frontConsole();
				} else {
					switch (val) {
					case 1: {
						UserLogin.login();
						carlotView();
						break;
					}
					case 2: {
						UserRegister.register();
						carlotView();
					}
					case 3: {
						System.out.println("\n Ok, please enjoy your browsing....");
						carlotView();
						break;
					}
					case 4: {
						
					    try
						{
							System.out.println("\n Ok, opening algorithm dex ....");
							
						    Thread.sleep(3000);
//							algoControllerView();
							dataStructures();
						    Thread.sleep(3000);
						}
						catch(InterruptedException ex)
						{
						    Thread.currentThread().interrupt();
						}
						break;
					}
					case 0: {
						System.out.println("\n   Come Back *Soon* !\n");
						frontConsole();
					}
					}
					newScan.close();
				}
			} catch (SQLException e) {
				System.out.println("Input digits from 0 - 4" + e);
				frontConsole();
			}
			frontConsole();

		} catch (InputMismatchException e) {
			System.out.println("Oops, Inputs! must choose 1,2,3,4... " + e);
			frontConsole();
		}

	}

}
