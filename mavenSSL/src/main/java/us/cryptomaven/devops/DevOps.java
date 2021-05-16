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
        springIntroCat.setId(1L);
        springIntroCat.setCategory("CryptoMaven 1");

        springIntroCat = productCategoryRepository.save(springIntroCat);

        ProductCategory springCoreCat = new ProductCategory();
        springCoreCat.setId(2L);
        springCoreCat.setCategory("CryptoMaven 2");

        springCoreCat = productCategoryRepository.save(springCoreCat);

        ProductCategory springBootCat = new ProductCategory();
        springBootCat.setId(3L);
        springBootCat.setCategory("CryptoMaven 3");

        springBootCat = productCategoryRepository.save(springBootCat);

        ProductCategory thymeleafCat = new ProductCategory();
        thymeleafCat.setId(4L);
        thymeleafCat.setCategory("CryptoMaven 4");

        thymeleafCat = productCategoryRepository.save(thymeleafCat);

        ProductCategory geapCat = new ProductCategory();
        geapCat.setId(5L);
        geapCat.setCategory("CryptoMaven 5");

        geapCat = productCategoryRepository.save(geapCat);

        Product springIntro = new Product();
        springIntro.setId(1L);
        springIntro.setCoinName("CryptoMaven");
        springIntro.setCoinSubtitle("Armchair Bitcoinist");
        springIntro.setAuthor(tm);
        springIntro.setCoinDescription("https://towardsdatascience.com/creating-bitcoin-trading-bots-that-dont-lose-money-2e7165fb0b29\n");

        springIntro.setPrice(new BigDecimal("0"));
        springIntro.setImageUrl("TMMmoonscape_450.jpg");
        springIntro.getProductCategories().add(springIntroCat);
        springIntro.getProductCategories().add(springBootCat);

        springIntro = productRepository.save(springIntro);

        Product springCoreUltimate = new Product();
        springCoreUltimate.setId(2L);
        springCoreUltimate.setCoinName("CryptoMaven 2");
        springCoreUltimate.setCoinSubtitle("Dailytech");
        springCoreUltimate.setAuthor(tm);
        springCoreUltimate.setCoinDescription("https://towardsdatascience.com/creating-bitcoin-trading-bots-that-dont-lose-money-2e7165fb0b29\n");

        springCoreUltimate.setPrice(new BigDecimal("199"));
        springCoreUltimate.setImageUrl("tmm2.png");
        springCoreUltimate.getProductCategories().add(springCoreCat);
        springCoreUltimate.getProductCategories().add(springBootCat);

        springCoreUltimate = productRepository.save(springCoreUltimate);

        Product thymeleaf = new Product();
        thymeleaf.setId(3L);
        thymeleaf.setCoinName("CryptoMaven 3");
        thymeleaf.setCoinSubtitle("Thymeleaf");
        thymeleaf.setAuthor(tm);
        thymeleaf.setCoinDescription("https://www.coindesk.com/set-protocol-launches-momentum-trading-strategy\n" +
                "\n" +
                ".\n" +
                "\n");
        thymeleaf.setPrice(new BigDecimal("199"));
        thymeleaf.setImageUrl("dailytech.png");
        thymeleaf.getProductCategories().add(thymeleafCat);

        thymeleaf = productRepository.save(thymeleaf);

        Product springCore = new Product();
        springCore.setId(4L);
        springCore.setCoinName("CryptoMaven 4");
        springCore.setCoinSubtitle("Armchair Bitcoinist");
        springCore.setAuthor(tm);
        springCore.setCoinDescription("https://www.coindesk.com/set-protocol-launches-momentum-trading-strategy\n" +
                "\n" +
                "" +
                "Java\n");
        springCore.setPrice(new BigDecimal("199"));
        springCore.setImageUrl("tmm4.png");
        springCore.getProductCategories().add(springCoreCat);
        springCore.getProductCategories().add(springBootCat);

        springCore = productRepository.save(springCore);

        Product springCoreAdv = new Product();
        springCoreAdv.setId(5L);
        springCoreAdv.setCoinName("CryptoMaven 5");
        springCoreAdv.setCoinSubtitle("Armchair Bitcoinist");
        springCoreAdv.setAuthor(tm);
        springCoreAdv.setCoinDescription("https://www.coindesk.com/set-protocol-launches-momentum-trading-strategy\n");

        springCoreAdv.setPrice(new BigDecimal("199"));
        springCoreAdv.setImageUrl("tmm3.png");
        springCoreAdv.getProductCategories().add(springCoreCat);
        springCoreAdv.getProductCategories().add(springBootCat);

        springCoreAdv = productRepository.save(springCoreAdv);

        Product springCoreDevOps = new Product();
        springCoreDevOps.setId(6L);
        springCoreDevOps.setCoinName("CryptoMaven 5");
        springCoreDevOps.setCoinSubtitle("Cloud");
        springCoreDevOps.setAuthor(tm);
        springCoreDevOps.setCoinDescription("https://towardsdatascience.com/creating-bitcoin-trading-bots-that-dont-lose-money-2e7165fb0b29\n");
        springCoreDevOps.setPrice(new BigDecimal("199"));
        springCoreDevOps.setImageUrl("shadowbox.png");
        springCoreDevOps.getProductCategories().add(springCoreCat);
        springCoreDevOps.getProductCategories().add(springBootCat);

        springCoreDevOps = productRepository.save(springCoreDevOps);
    }
}
