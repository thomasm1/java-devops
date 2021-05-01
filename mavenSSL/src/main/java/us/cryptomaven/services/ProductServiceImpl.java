package us.cryptomaven.services;

import us.cryptomaven.domain.Product;
import us.cryptomaven.repositories.ProductRepository;
import us.cryptomaven.services.jms.JmsTextMessageService;
import org.apache.commons.collections4.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;
    private JmsTextMessageService jmsTextMessageService;

    @Autowired
    public void setProductRepository(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Autowired
    public void setJmsTextMessageService(JmsTextMessageService jmsTextMessageService) {
        this.jmsTextMessageService = jmsTextMessageService;
    }

    @Override
    public Product getProduct(Integer id) {
        jmsTextMessageService.sendTextMessage("Fetching Product ID: " + id );
        return productRepository.findOne(id);
    }

    @Override
    public List<Product> listProducts() {
        jmsTextMessageService.sendTextMessage("Listing Products");
        return IteratorUtils.toList(productRepository.findAll().iterator());
    }

}
