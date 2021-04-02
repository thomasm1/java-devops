package net.mavenControllers.crypto.coins.dashboard.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class ProductNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	// @ExceptionHandler(value = ProductNotFoundException.class)
	// public ResponseEntity<Object> exception(ProductNotfoundException exception) {
	// 	return null;
	// }

}
