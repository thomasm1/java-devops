package us.cryptomaven.services;

import us.cryptomaven.domain.Product;
import us.cryptomaven.domain.User;
import us.cryptomaven.utils.dataVisuals.UserProduct;

import java.util.List;

public interface UserService {

    User getUser(Long id);

    List<User> getUsers();

    List<User> listUsers();


//    public List<UserProduct> userProducts();


    public User addUser(User u);

    public User updateUserById(User u);

    public User getUserById(Long id);

    public User getUserByEmail(String email);

    public  User getUserByEmailAndPassword(String email, String password);

    public boolean deleteUserById(Long id);

}
