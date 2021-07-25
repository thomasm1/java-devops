package us.cryptomaven.restControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import us.cryptomaven.domain.Product;
import us.cryptomaven.services.ProductService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin(origins = "*")
public class ProductRestController {

//    private static Map<Long, Product> productRepo = new HashMap<>();

    private ProductService prServ;

    @Autowired
    public void setProductService(ProductService productService) {
        this.prServ = productService;
    }

    @RequestMapping("/product/{id}")
    public String getProductById(@PathVariable Long id, Model model){

        model.addAttribute("product", prServ.getProduct(id));

        return "product";
    }

}
