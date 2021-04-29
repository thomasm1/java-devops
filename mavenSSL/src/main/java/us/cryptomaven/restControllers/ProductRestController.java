package us.cryptomaven.restControllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/products")
public class ProductRestController {

//    private ProductService productService;

    @RequestMapping("/list")
    public List<Object> listProducts() {
        return null;
    }

    @RequestMapping("/test")
    public String products() {
        return "products test";
    }
}
