package net.thomasmaestas.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.UrlBasedViewResolver;

import net.thomasmaestas.random.DefaultRandomNumberGenerator;
import net.thomasmaestas.random.RandomGenerator;

/**
 * @author net.thomasmaestas
 *
 */
@Configuration
// Marks class as configuration
// Specifies which package to scan
@ComponentScan("net.thomasmaestas")

// Enables Spring annotations
@EnableWebMvc
public class Config {

	@Bean
	public UrlBasedViewResolver setupViewResolver() {
		UrlBasedViewResolver resolver = new UrlBasedViewResolver();
		resolver.setPrefix("/WEB-INF/views/");
		resolver.setSuffix(".jsp");
		resolver.setViewClass(JstlView.class);
		return resolver;
	}

	@Bean
	public RandomGenerator randomGenerator() {
		return new DefaultRandomNumberGenerator();
	}
	
		
}
