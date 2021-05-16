package us.cryptomaven.repositories;

import us.cryptomaven.domain.Author;
import org.springframework.data.repository.CrudRepository;

public interface AuthorRepository extends CrudRepository<Author, Long> {
}
