package us.cryptomaven.pageControllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import us.cryptomaven.domain.Product;
import us.cryptomaven.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import us.cryptomaven.services.UserService;
import us.cryptomaven.utils.dataVisuals.ChartData;
import us.cryptomaven.utils.dataVisuals.UserProduct;

import java.util.List;

@Controller
public class IndexController {


    @Autowired
    UserService uServ;

    @Autowired
    ProductService productService;

    @Autowired
    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

//    @RequestMapping({"/", "index"})
//    public String getIndex(Model model){
//
//        model.addAttribute("products", productService.listProducts());
//
//        return "index";
//    }

    @RequestMapping("secured")
    public String secured(){
        return "secured";
    }

    @RequestMapping({"/", "index"})
    public String displayIndex(Model model) throws JsonProcessingException {
        model.addAttribute("products", productService.listProducts());
//        model.addAttribute("versionNumber", ver);

//        // query database for products
//        List<Product> products = productService.listProducts();
//        model.addAttribute("productsList", products);
//
//        List<ChartData> productData = productService.getProductStatus();
//
//        // Lets convert productData object into a json structure for use in javascript
//        ObjectMapper objectMapper = new ObjectMapper();
//        String jsonString = objectMapper.writeValueAsString(productData);
//        // [["ETH", 1], ["BTC", 2], ["HEX", 1]]
//
//        model.addAttribute("productStatusCnt", jsonString);
//
//        // we are querying the database for users
        List<UserProduct> usersProductCnt = uServ.userProducts();
        model.addAttribute("usersListProductsCnt", usersProductCnt);


        return "index";

    }

}
