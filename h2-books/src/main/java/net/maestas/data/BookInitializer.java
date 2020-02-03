package net.maestas.data;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.github.javafaker.Faker;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class BookInitializer implements CommandLineRunner {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public void run(String... args) throws Exception {

        Faker faker = new Faker();

//        log.info("Starting book initialization ...");

        for(int i = 0; i < 10; i++) {

            Book book = new Book();
           
//            book.setTitle("War and Peace");
//            book.setAuthor("Tolstoy");
//            book.setIsbn("67868687222278");
            
            book.setTitle(faker.book().title());
            book.setAuthor(faker.book().author());
            book.setIsbn(UUID.randomUUID().toString());

            bookRepository.save(book);
        }

//        log.info("... finished book initialization");

    }
}
