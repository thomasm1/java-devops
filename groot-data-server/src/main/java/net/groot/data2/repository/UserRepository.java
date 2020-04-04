package net.groot.data2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.groot.data2.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
