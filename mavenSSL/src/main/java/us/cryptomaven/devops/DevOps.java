package us.cryptomaven.devops;

import us.cryptomaven.domain.Author;
import us.cryptomaven.domain.Product;
import us.cryptomaven.domain.ProductCategory;
import us.cryptomaven.repositories.AuthorRepository;
import us.cryptomaven.repositories.ProductCategoryRepository;
import us.cryptomaven.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class DevOps implements ApplicationListener<ContextRefreshedEvent> {

    private AuthorRepository authorRepository;
    private ProductCategoryRepository productCategoryRepository;
    private ProductRepository productRepository;

    @Autowired
    public void setAuthorRepository(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Autowired
    public void setProductCategoryRepository(ProductCategoryRepository productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }

    @Autowired
    public void setProductRepository(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        Author tm = new Author();
        tm.setFirstName("Thomas");
        tm.setLastName("Maestas");
        tm.setId(1);
        tm.setImage("profile.jpg");

        tm = authorRepository.save(tm);

        ProductCategory springIntroCat = new ProductCategory();
        springIntroCat.setId(1);
        springIntroCat.setCategory("CryptoMaven 1");

        springIntroCat = productCategoryRepository.save(springIntroCat);

        ProductCategory springCoreCat = new ProductCategory();
        springCoreCat.setId(2);
        springCoreCat.setCategory("CryptoMaven 2");

        springCoreCat = productCategoryRepository.save(springCoreCat);

        ProductCategory springBootCat = new ProductCategory();
        springBootCat.setId(3);
        springBootCat.setCategory("CryptoMaven 3");

        springBootCat = productCategoryRepository.save(springBootCat);

        ProductCategory thymeleafCat = new ProductCategory();
        thymeleafCat.setId(4);
        thymeleafCat.setCategory("CryptoMaven 4");

        thymeleafCat = productCategoryRepository.save(thymeleafCat);

        ProductCategory geapCat = new ProductCategory();
        geapCat.setId(5);
        geapCat.setCategory("CryptoMaven 5");

        geapCat = productCategoryRepository.save(geapCat);

        Product springIntro = new Product();
        springIntro.setId(1);
        springIntro.setCourseName("CryptoMaven");
        springIntro.setCourseSubtitle("Armchair Bitcoinist");
        springIntro.setAuthor(tm);
        springIntro.setCourseDescription("https://towardsdatascience.com/creating-bitcoin-trading-bots-that-dont-lose-money-2e7165fb0b29\n");

        springIntro.setPrice(new BigDecimal("0"));
        springIntro.setImageUrl("TMMmoonscape_450.jpg");
        springIntro.getProductCategories().add(springIntroCat);
        springIntro.getProductCategories().add(springBootCat);

        springIntro = productRepository.save(springIntro);

        Product springCoreUltimate = new Product();
        springCoreUltimate.setId(2);
        springCoreUltimate.setCourseName("CryptoMaven 2");
        springCoreUltimate.setCourseSubtitle("Dailytech");
        springCoreUltimate.setAuthor(tm);
        springCoreUltimate.setCourseDescription("https://towardsdatascience.com/creating-bitcoin-trading-bots-that-dont-lose-money-2e7165fb0b29\n");

        springCoreUltimate.setPrice(new BigDecimal("199"));
        springCoreUltimate.setImageUrl("tmm2.png");
        springCoreUltimate.getProductCategories().add(springCoreCat);
        springCoreUltimate.getProductCategories().add(springBootCat);

        springCoreUltimate = productRepository.save(springCoreUltimate);

        Product thymeleaf = new Product();
        thymeleaf.setId(3);
        thymeleaf.setCourseName("CryptoMaven 3");
        thymeleaf.setCourseSubtitle("Thymeleaf");
        thymeleaf.setAuthor(tm);
        thymeleaf.setCourseDescription("https://www.coindesk.com/set-protocol-launches-momentum-trading-strategy\n" +
                "\n" +
                ".\n" +
                "\n");
        thymeleaf.setPrice(new BigDecimal("199"));
        thymeleaf.setImageUrl("dailytech.png");
        thymeleaf.getProductCategories().add(thymeleafCat);

        thymeleaf = productRepository.save(thymeleaf);

        Product springCore = new Product();
        springCore.setId(4);
        springCore.setCourseName("CryptoMaven 4");
        springCore.setCourseSubtitle("Armchair Bitcoinist");
        springCore.setAuthor(tm);
        springCore.setCourseDescription("https://www.coindesk.com/set-protocol-launches-momentum-trading-strategy\n" +
                "\n" +
                "" +
                "Java\n");
        springCore.setPrice(new BigDecimal("199"));
        springCore.setImageUrl("tmm4.png");
        springCore.getProductCategories().add(springCoreCat);
        springCore.getProductCategories().add(springBootCat);

        springCore = productRepository.save(springCore);

        Product springCoreAdv = new Product();
        springCoreAdv.setId(5);
        springCoreAdv.setCourseName("CryptoMaven 5");
        springCoreAdv.setCourseSubtitle("Armchair Bitcoinist");
        springCoreAdv.setAuthor(tm);
        springCoreAdv.setCourseDescription("https://www.coindesk.com/set-protocol-launches-momentum-trading-strategy\n");

        springCoreAdv.setPrice(new BigDecimal("199"));
        springCoreAdv.setImageUrl("tmm3.png");
        springCoreAdv.getProductCategories().add(springCoreCat);
        springCoreAdv.getProductCategories().add(springBootCat);

        springCoreAdv = productRepository.save(springCoreAdv);

        Product springCoreDevOps = new Product();
        springCoreDevOps.setId(6);
        springCoreDevOps.setCourseName("CryptoMaven 5");
        springCoreDevOps.setCourseSubtitle("Cloud");
        springCoreDevOps.setAuthor(tm);
        springCoreDevOps.setCourseDescription("https://towardsdatascience.com/creating-bitcoin-trading-bots-that-dont-lose-money-2e7165fb0b29\n");
        springCoreDevOps.setPrice(new BigDecimal("199"));
        springCoreDevOps.setImageUrl("shadowbox.png");
        springCoreDevOps.getProductCategories().add(springCoreCat);
        springCoreDevOps.getProductCategories().add(springBootCat);

        springCoreDevOps = productRepository.save(springCoreDevOps);
    }
}
