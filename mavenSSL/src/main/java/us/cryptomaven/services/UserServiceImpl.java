package us.cryptomaven.services;

import org.apache.commons.collections4.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import us.cryptomaven.domain.User;
import us.cryptomaven.domain.User;
import us.cryptomaven.repositories.UserRepository;
import us.cryptomaven.repositories.UserRepository;
import us.cryptomaven.services.jms.JmsTextMessageService;
import us.cryptomaven.utils.dataVisuals.UserProduct;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    
    @Autowired
    private UserRepository userRepository;
    private JmsTextMessageService jmsTextMessageService;


    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Autowired
    public void setJmsTextMessageService(JmsTextMessageService jmsTextMessageService) {
        this.jmsTextMessageService = jmsTextMessageService;
    }
 
 
    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUserById(User user) {
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findOne(id); //.get();
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User getUserByEmailAndPassword(String email, String password) {
        return  userRepository.findByEmailAndPassword(email, password);
    }


    @Override
    public User getUser(Long id) {
        return userRepository.findOne(id);
    }

    @Override
    public List<User> getUsers() {
        Sort sort = new Sort(Sort.Direction.ASC, "id");
        return (List<User>) userRepository.findAll();

    }

    @Override
    public List<User> listUsers() {
        Sort sort = new Sort(Sort.Direction.ASC, "id");
        return (List<User>) userRepository.findAll();
    }

//    @Override
//    public List<UserProduct> userProducts() {
//        return   userRepository.userProducts();
//    }

    @Override
    public boolean deleteUserById(Long id) {
        return userRepository.deleteUserById(userRepository.findOne(id));// .get());
    }

    @Override
    public List<UserProduct> userProducts() {
        return null;
    }
}
