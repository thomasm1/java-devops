package us.cryptomaven.services;

import us.cryptomaven.domain.Product;

import java.util.List;

public interface ProductService {


    Product getProduct(Integer id);

    List<Product> listProducts();
}
