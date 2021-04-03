package net.mavenControllers.crypto.coins.dashboard.service.Impl;

import java.util.List;

import net.mavenControllers.crypto.coins.dashboard.model.Product;
import net.mavenControllers.crypto.coins.dashboard.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import net.mavenControllers.crypto.coins.dashboard.service.ProductsService;

@Service
public class ProductServiceImpl implements ProductsService {
	
	@Autowired
	public ProductRepository prRep;

	@Override
	public Product addProduct(Product product) {
		return prRep.save(product);
	}

	@Override
	public Product updateProductById(Product product) {
		return prRep.save(product);
	}

	@Override
	public Product getProductById(Long id) {
		return prRep.findById(id).get();
	}

	@Override
	public List<Product> getProductsByCategory(String category) {
		return prRep.findAllByCategory(category);
	}

	@Override
	public List<Product> getProductsByCategoryAndVolume(String category, Double volume) {
		
		return prRep.findAllByCategoryAndVolume(category, volume);
	}

	@Override
	public List<Product> getProducts() {
		Sort sort = new Sort(Sort.Direction.ASC, "id");
		return prRep.findAll(sort);
	
	}

	@Override
	public boolean deleteProductById(Long id) {
		return prRep.deleteProductById(prRep.findById(id).get());
	}

}
