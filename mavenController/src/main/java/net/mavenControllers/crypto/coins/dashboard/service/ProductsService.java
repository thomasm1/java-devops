package net.mavenControllers.crypto.coins.dashboard.service;

import java.util.List;

import net.mavenControllers.crypto.coins.dashboard.model.Product;

public interface ProductsService {
	
	public Product addProduct(Product product);
	
	public Product updateProductById(Product product);
	
	public Product getProductById(Long id);
	
	public List<Product> getProductsByCategory(String category);
	
	public List<Product> getProductsByCategoryAndVolume(String category, Double volume);
	
	public List<Product> getProducts();


}
