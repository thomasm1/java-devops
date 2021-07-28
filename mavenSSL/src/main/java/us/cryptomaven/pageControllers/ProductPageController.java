package us.cryptomaven.pageControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import us.cryptomaven.services.ProductService;

@Controller
@CrossOrigin(origins = "*")
public class ProductPageController {

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
