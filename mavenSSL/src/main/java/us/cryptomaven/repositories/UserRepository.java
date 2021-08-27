package us.cryptomaven.repositories;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import us.cryptomaven.domain.User;
import org.springframework.data.repository.CrudRepository;
import us.cryptomaven.utils.dataVisuals.UserProduct;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String value);
    User findByEmailAndPassword(String email, String password);

    User findById(Long id);
    User save(User user);
    boolean deleteUserById(User one);

    Object findAll(Sort sort);
    @Query(nativeQuery=true, value="SELECT u.first_name as firstName, u.last_name as lastName, COUNT(pe.user_id) as projectCount " +
        "FROM user u left join project_user pe ON pe.user_id = u.user_id " +
        "GROUP BY u.first_name, u.last_name ORDER BY 3 DESC")
     List<UserProduct> userProducts();
}
