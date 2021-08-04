package us.cryptomaven.repositories;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import us.cryptomaven.domain.Product;
import us.cryptomaven.utils.dataVisuals.ChartData;
import us.cryptomaven.utils.dataVisuals.TimeChartData;


import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {  // JpaRepository

    // 	@Query("select p from Product p where p.category = ?1")
    List<Product> findAllByCategory(String category);

//	@Query("select u from User u where u.isDriver = ?1 and u.batch.batchLocation = ?2")
    public List<Product> findAllByCategoryAndVolume(String category, Double volume);

    boolean deleteProductById(Product product);


    Object findAll(Sort sort);

    Product save(Product product);

    boolean deleteUserById(Product one);

//    @Query(nativeQuery=true, value="SELECT symbol as label, COUNT(*) as value " +
//            "FROM product " +
//            "GROUP BY symbol")
//    public List<ChartData> getProductStatus();

//    @Query(nativeQuery=true, value="SELECT name as productName, start_date as startDate, end_date as endDate"
//            + " FROM product WHERE start_date is not null")
//    public List<TimeChartData> getTimeData();
}
