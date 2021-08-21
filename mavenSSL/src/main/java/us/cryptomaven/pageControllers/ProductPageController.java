package us.cryptomaven.pageControllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import us.cryptomaven.domain.Product;
import us.cryptomaven.domain.User;
import us.cryptomaven.services.ProductService;
import us.cryptomaven.services.TimeChartData;
import us.cryptomaven.services.UserService;

import java.util.List;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/product")
public class ProductPageController {

//    private static Map<Long, Product> productRepo = new HashMap<>();
    private UserService uServ;
    private ProductService prServ;
    
    @Autowired
    public void setProductService(ProductService productService) {
        this.prServ = productService;
    }

    @RequestMapping(path ="/{id}", method = RequestMethod.GET)
    public String getProductById(@PathVariable Long id, Model model){

        model.addAttribute("product", prServ.getProduct(id));

        return "product";
    }
    @RequestMapping(path = "", method = RequestMethod.GET)
    public String displayProducts(Model model) {
        Iterable<Product> products = prServ.getProducts();
        model.addAttribute("products", products);
        return "/list-products";
    }

    @RequestMapping("/new")
    public String displayProductForm(Model model) {

        Product aProduct = new Product();
        Iterable<User> employees = uServ.listUsers();
        model.addAttribute("product", aProduct);
        model.addAttribute("allEmployees", employees);

        return "new-product";
    }

    @RequestMapping(path = "/save", method = RequestMethod.POST)
    public String createProduct(Product product, @RequestParam List<Long> employees, Model model) {

        prServ.addProduct(product);

        // use a redirect to prevent duplicate submissions
        return "redirect:/products ";

    }

    @RequestMapping("/timelines")
    public String displayProductTimelines(Model model) throws JsonProcessingException {

        List<TimeChartData> timelineData = prServ.getTimeData();

        ObjectMapper objectMapper = new ObjectMapper();
        String jsonTimelineString = objectMapper.writeValueAsString(timelineData);

        System.out.println("---------- product timelines ----------");
        System.out.println(jsonTimelineString);

        model.addAttribute("productTimeList", jsonTimelineString);

        return "products/product-timelines";
    }
}
