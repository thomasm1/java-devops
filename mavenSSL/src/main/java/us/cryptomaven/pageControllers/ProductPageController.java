package us.cryptomaven.pageControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import us.cryptomaven.domain.Product;
import us.cryptomaven.domain.User_;
import us.cryptomaven.services.ProductService;
import us.cryptomaven.services.UserService;
import us.cryptomaven.utils.blockchain.Block;
import us.cryptomaven.utils.blockchain.BlockChainApp;
import us.cryptomaven.utils.dataStructure.circularLinkedList.App;
import us.cryptomaven.utils.dataStructure.queue.Qapp;
import us.cryptomaven.utils.dataStructure.stack.*;
import us.cryptomaven.utils.dataStructure.singlyLinkedList.SinglyApp;
import us.cryptomaven.utils.dataStructure.binarySearchTree.BinaryApp;

import java.util.List;

@Controller
@RequestMapping("/product")
public class ProductPageController {

//    private static Map<Long, Product> productRepo = new HashMap<>();

    private ProductService prServ;
    private UserService uServ;
    
    @Autowired
    public void setProductService(ProductService productService) {
        this.prServ = productService;
    }

    @RequestMapping("/{id}")
    public String getProductById(@PathVariable Long id, Model model){

        model.addAttribute("product", prServ.getProduct(id));

        return "product";
    }

    @RequestMapping("")
    public String displayProducts(Model model) {

        Block blockchain = BlockChainApp.startBlock();

        // Products
        List<Product> products = prServ.listProducts();
        model.addAttribute("products", products);

        App app2 = new  App();
        app2.cList(333,444);

        Qapp q = new Qapp();
        q.qUp(123, 345);

        Stack st = new Stack(6);
        st.push('t');
        st.push('h');
        st.push('o');
        st.push('m');
        st.push('a');
        st.push('s');
        System.out.println(st);
        st.print();

        StackApp stackapp = new StackApp();
        stackapp.reverse("Thomas");

        SinglyApp s = new SinglyApp();
        s.sList(12,13);


        BinaryApp bst = new BinaryApp();
        bst.bSearch();

        return "list-products";
    }

    @RequestMapping(path = "/new")
    public String displayProductForm(Model model) {

        Product aProduct = new Product();
        Iterable<User_> users = uServ.listUsers();
        model.addAttribute("product", aProduct);
        model.addAttribute("allUsers", users);

        return "new-product";
    }

    @RequestMapping(path = "/save", method = RequestMethod.POST)
    public String createProduct(Product product, @RequestParam List<Long> users, Model model) {

        prServ.addProduct(product);

        // use a redirect to prevent duplicate submissions
        return "redirect:/product ";

    }

//    @GetMapping("/timelines")
//    public String displayProductTimelines(Model model) throws JsonProcessingException {
//
//        List<TimeChartData> timelineData = prServ.getTimeData();
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        String jsonTimelineString = objectMapper.writeValueAsString(timelineData);
//
//        System.out.println("---------- product timelines ----------");
//        System.out.println(jsonTimelineString);
//
//        model.addAttribute("productTimeList", jsonTimelineString);
//
//        return "products/product-timelines";
//    }
    
}
