package us.cryptomaven;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import us.cryptomaven.repositories.ProductRepository;
import us.cryptomaven.repositories.UserRepository;
import us.cryptomaven.services.ProductService;
import us.cryptomaven.services.UserService;

@SpringBootApplication
public class CryptoMavenApp {

	private static final Logger LOGGER = LoggerFactory.getLogger(CryptoMavenApp.class);

	@Autowired
	UserRepository userRepo;

	@Autowired
	ProductRepository prodRepo;

	@Autowired
	UserService userService;

	@Autowired
	ProductService productService;

	public static void main(String[] args) {
		LOGGER.info("starting info message");
		LOGGER.warn("starting warn message");
		LOGGER.error("starting error message");
		SpringApplication.run(CryptoMavenApp.class, args);

	}
//	@Bean
//	CommandLineRunner runner() {
//
//		return args -> {
//			User user1 = new User(3333L,  "firstName",   "lastName",  "email@gmail.com", "passwordx", "http://tmm.net/images");
//			User user2 = new User(444L, "Mike", "Lanister", "lanister@gmail.com", "passwordx", "http://tmm.net/images");
//			User user3 = new User(555L, "Steve", "Reeves", "Reeves@gmail.com",  "passwordx", "http://tmm.net/images");
//
//			User user4 = new User(6677L, "Ronald", "Connor", "connor@gmail.com",   "passwordx", "http://tmm.net/images");
//			User user5 = new User(666L, "Jim", "Salvator", "Sal@gmail.com",   "passwordx", "http://tmm.net/images");
//			User user6 = new User(777L, "Peter", "Henley", "henley@gmail.com",   "passwordx", "http://tmm.net/images");
//
//			User user7 = new User(7777L, "Richard", "Carson", "carson@gmail.com",   "passwordx", "http://tmm.net/images");
//			User user8 = new User(885L, "Honor", "Miles", "miles@gmail.com",   "passwordx", "http://tmm.net/images");
//			User user9 = new User(8885L, "Tony", "Roggers", "roggers@gmail.com",   "passwordx", "http://tmm.net/images");
//
//
//
//
////
////			// need to set both sides of the relationship manually
////
////			user1.setProducts(Arrays.asList(pro1, pro3, pro4));
////			user2.setProducts(Arrays.asList(pro1));
////			user3.setProducts(Arrays.asList(pro2, pro4));
//
////
//			userRepo.save(user1);
//			userRepo.save(user2);
//			userRepo.save(user3);
//			userRepo.save(user4);
//			userRepo.save(user5);
//			userRepo.save(user6);
//			userRepo.save(user7);
//			userRepo.save(user8);
//			userRepo.save(user9);
//
////			// save prodects in database
//
//
//
//		};

//	}
}
