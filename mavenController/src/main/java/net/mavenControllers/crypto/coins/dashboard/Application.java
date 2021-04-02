package net.mavenControllers.crypto.coins.dashboard;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"net.mavenControllers.crypto.coins.dashboard.controller", "net.mavenControllers.crypto.coins.dashboard.repository", "net.mavenControllers.crypto.coins.dashboard.service"})
public class Application {
    private static final Logger LOGGER = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {
        LOGGER.info("starting info message");
        LOGGER.warn("starting warn message");
        LOGGER.error("starting error message");
        SpringApplication.run(Application.class, args);
    }

}
