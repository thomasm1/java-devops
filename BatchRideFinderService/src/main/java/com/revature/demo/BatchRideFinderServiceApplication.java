package com.revature.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.revature.entities.Rideforce;

@SpringBootApplication
@EnableJpaRepositories("com.revature.repositories")
@ComponentScan("com.revature")
@EntityScan("com.revature.entities")
public class BatchRideFinderServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BatchRideFinderServiceApplication.class, args);
		 
	}
	 
}
