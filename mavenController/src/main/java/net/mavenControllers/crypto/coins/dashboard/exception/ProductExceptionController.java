package net.mavenControllers.crypto.coins.dashboard.exception;

import net.mavenControllers.crypto.coins.dashboard.AppController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ProductExceptionController  {
	private Logger LOGGER = LoggerFactory.getLogger(ProductExceptionController.class);

	@ExceptionHandler(value = ProductNotFoundException.class)
	   public ResponseEntity<Object> exception(ProductNotFoundException exception) {
		  LOGGER.error("Request:" + exception);
	      return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
	   }

}
