package us.cryptomaven.pageControllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import us.cryptomaven.services.ChartData;
import us.cryptomaven.domain.Product;
import us.cryptomaven.services.UserProduct;
import us.cryptomaven.repositories.ProductRepository;
import us.cryptomaven.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import us.cryptomaven.services.UserService;

import java.util.List;

@Controller
public class IndexController {

    @Autowired
    private ProductService productService;

    @Autowired
    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

    @Autowired
    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Autowired
    private ProductRepository productRepo;


    @RequestMapping({"/", "index"})
    public String getIndex(Model model) throws JsonProcessingException {

        model.addAttribute("products", productService.listProducts());
///
// querying db for products
        List<Product> products = productService.listProducts();
        model.addAttribute("productsList", products);

        List<ChartData> productData = productService.getProductStatus();

        // Lets convert productData object into a json structure for use in javascript
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonString = objectMapper.writeValueAsString(productData);
        // [["NOTSTARTED", 1], ["INPROGRESS", 2], ["COMPLETED", 1]]

        model.addAttribute("productStatusCnt", jsonString);

        // we are querying the database for users
        List<UserProduct> usersProductCount = userService.userProducts();
        model.addAttribute("usersListProductsCnt", usersProductCount);

        ///
        return "index";
    }

    @RequestMapping("secured")
    public String secured(){
        return "secured";
    }
}
