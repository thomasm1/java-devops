package configs;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import beans.Box;

import beans.MyLifeCycleBean;

@Component  /*this should be managed by Spring IOC container*/
@Configuration  /*tells Spring what type of class/role this serves in Spring IOC (applicationContext)*/
public class AppConfig {
/* This Class contains information necessary to help 
 * create the Spring IOC Container  */
	
	@Bean
	public MyLifeCycleBean getLifeCycleBean() {
		return new MyLifeCycleBean();
	}
	
	@Bean // belongs on a method, it says this method is used to return a BEAN
	@Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
	public Box getSingleBox() {
		System.out.println("Getting you a box");
		return new Box(15);
	}
	@Bean // belongs on a method, it says this method is used to return a BEAN
	@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
	public Box getProtoBox() {
		System.out.println("Getting you a NEW box");
		return new Box(15);
	}
	
}
