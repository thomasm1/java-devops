package net.mavencrypto.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.UrlBasedViewResolver;

import net.mavencrypto.random.DefaultRandomNumberGenerator;
import net.mavencrypto.random.RandomGenerator;

/**
 * @author thomasMilton
 *
 */
@Configuration
// Marks this class as configuration
// Specifies which package to scan
@ComponentScan("net.mavencrypto")
// Enables Spring's annotations
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
