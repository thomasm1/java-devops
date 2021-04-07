package com.mavenalgorithms.services;

import com.mavenalgorithms.models.Product;

import java.util.List;

public interface ProductsService {
	
	public Product addProduct(Product product);
	
	public Product updateProductById(Product product);
	
	public Product getProductById(Long id);
	
	public List<Product> getProductsByCategory(String category);
	
	public List<Product> getProductsByCategoryAndVolume(String category, Double volume);
	
	public List<Product> getProducts();

	public boolean deleteProductById(Long id);
}
