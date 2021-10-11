package us.cryptomaven.services;

import us.cryptomaven.domain.User_;
import us.cryptomaven.utils.dataVisuals.UserProduct;

import java.util.List;

public interface UserService {

    User_ getUser(Long id);

    List<User_> getUsers();

    List<User_> listUsers();


//    public List<UserProduct> userProducts();


    public User_ addUser(User_ u);

    public User_ updateUserById(User_ u);

    public User_ getUserById(Long id);

    public User_ getUserByEmail(String email);

    public User_ getUserByEmailAndPassword(String email, String password);

    public boolean deleteUserById(Long id);

    List<UserProduct> userProducts();
}
