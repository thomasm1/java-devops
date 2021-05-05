package us.cryptomaven.repositories;

import us.cryptomaven.domain.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {}
