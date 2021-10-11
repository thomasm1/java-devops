package us.cryptomaven.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import us.cryptomaven.domain.User_;
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
    public User_ addUser(User_ user) {
        return userRepository.save(user);
    }

    @Override
    public User_ updateUserById(User_ user) {
        return userRepository.save(user);
    }

    public User_ getUserById(Long id) {
        return userRepository.findOne(id); //.get();
    }

    @Override
    public User_ getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User_ getUserByEmailAndPassword(String email, String password) {
        return  userRepository.findByEmailAndPassword(email, password);
    }


    @Override
    public User_ getUser(Long id) {
        return userRepository.findOne(id);
    }

    @Override
    public List<User_> getUsers() {
        Sort sort = new Sort(Sort.Direction.ASC, "id");
        return (List<User_>) userRepository.findAll();

    }

    @Override
    public List<User_> listUsers() {
        Sort sort = new Sort(Sort.Direction.ASC, "id");
        return (List<User_>) userRepository.findAll();
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
