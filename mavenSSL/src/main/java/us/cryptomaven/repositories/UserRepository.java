package us.cryptomaven.repositories;

import us.cryptomaven.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
