package us.cryptomaven.repositories;

import us.cryptomaven.domain.User_;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User_, Long> {
    User_ findByEmail(String value);
    User_ findByEmailAndPassword(String email, String password);

    User_ findById(Long id);
    User_ save(User_ user);
    boolean deleteUserById(User_ one);

//    Object findAll(Sort sort);
//    @Query(nativeQuery=true, value="SELECT u.first_name as firstName, u.last_name as lastName, COUNT(pe.user_id) as projectCount " +
//        "FROM user u left join project_user pe ON pe.user_id = u.user_id " +
//        "GROUP BY u.first_name, u.last_name ORDER BY 3 DESC")
//     List<UserProduct> userProducts();
}
