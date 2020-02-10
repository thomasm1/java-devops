package beans;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.DisposableBean;

import javax.annotation.*;

public class MyLifeCycleBean implements InitializingBean, DisposableBean {

	// InitializingBean Interface ....
	public void afterPropertiesSet() throws Exception {
		System.out.println("After properties set method has been executed.");
		
	}

	@PostConstruct
	public void myInit() {
		System.out.println("Calling @PostConstruct  myInit");
	}

	@PreDestroy
	public void myTearDown() {
		System.out.println("Calling @PreDestroy myTearDown");
	}
	// DisposableBean Interface .... 
	public void destroy() throws Exception {
		System.out.println("Destroy method is executed.");
		
	}

}
