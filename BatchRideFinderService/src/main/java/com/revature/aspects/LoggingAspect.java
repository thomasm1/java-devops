package com.revature.aspects;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {
	
	private int counter = 0; 
	
	//this method i sthe advise and will 'advise' another method
	@Before("logMethod()") // when does this advice method executes
	public void logInfo() {
		
		System.out.println("This many calls @Before: "+ ++counter);
	}
	
	@After("logMethod()")
	public void logInfoAfter() {
		System.out.println("I print @After..: " + ++counter);
	}
	
	@Around("logMethod()")
	public void logInfoAround() {
		System.out.println("I print before & after  @Around ..: " + ++counter);
	}
	
// RevaturePointRestService/src/main/java/com/revature/controllers/RideForceController.java
	@Pointcut("execution(* com.revature.controllers.RideForceController.*(..))") 
	// This pointcut expresssion applies to any method executing in this controller
	public void logMethod() {
		// This is a hook method, does not do anything
	}
	
//  @Before - before
//	@After
//	@Throwing - only after meth throws an exetuion
//	@Around - most powerful type of advice and allows to
//  *both before and after"
	
}
