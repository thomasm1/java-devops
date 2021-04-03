package net.mavenControllers.crypto.coins.dashboard.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.mavenControllers.crypto.coins.dashboard.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

//	@Query("select p from Product p where p.category = ?1")
	public List<Product> findAllByCategory(String category);
	
//	@Query("select u from User u where u.isDriver = ?1 and u.batch.batchLocation = ?2")

	public List<Product> findAllByCategoryAndVolume(String category, Double volume);

	boolean deleteProductById(Product product);
}
