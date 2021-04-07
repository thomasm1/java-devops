package com.mavenalgorithms.repositories;

import com.mavenalgorithms.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

//	@Query("select p from Product p where p.category = ?1")
	public List<Product> findAllByCategory(String category);
	
//	@Query("select u from User u where u.isDriver = ?1 and u.batch.batchLocation = ?2")

	public List<Product> findAllByCategoryAndVolume(String category, Double volume);

	boolean deleteProductById(Product product);
}
