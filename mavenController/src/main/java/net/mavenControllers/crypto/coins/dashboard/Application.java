package net.mavenControllers.crypto.coins.dashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"net.mavenControllers.crypto.coins.dashboard.controller", "net.mavenControllers.crypto.coins.dashboard.repository", "net.mavenControllers.crypto.coins.dashboard.service"})
public class Application {
    public static void main(String[] args) {

        SpringApplication.run(Application.class, args);
    }

}
