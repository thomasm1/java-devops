package net.mavenControllers.crypto.coins.dashboard.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ProductException {
	
	@ExceptionHandler(value = ProductNotfoundException.class)
	   public ResponseEntity<Object> exception(ProductNotfoundException exception) {
	      return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
	   }

}
