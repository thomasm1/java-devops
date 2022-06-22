package us.cryptomaven.domain;


import java.io.Serializable;

import javax.persistence.*;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.*;


import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table
public class User_ {
    @Id
    //     @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="project_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)  // AUTO -> java ; IDENTITY ->JPA-Hibernate
    private Long id;

    private Date dateCreated;
    private Date lastUpdated;

    @Column(length = 200)
    private String firstName;

    @Column(length = 200)
    private String lastName;

    @Column(length = 200)
    private String image;

    @Column(length = 200)
    private String email;

    private String password;


    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.PERSIST},
            fetch = FetchType.LAZY)
    @JoinTable(name="product_user",
            joinColumns=@JoinColumn(name="user_id"),
            inverseJoinColumns= @JoinColumn(name="product_id")
    )
//    @JsonIgnore
//    private Product product;

    @JsonIgnore
    private List<Product> coinProducts;

    public List<Product> getProducts() {
        return coinProducts;
    }

    public void setProducts(List<Product> coinProducts) {
        this.coinProducts = coinProducts;
    }

////
//    public Product getProduct() { return product;   }
//
//    public void setProduct(Product product) {
//        this.product = product;
//    }

    public User_() {}

    public User_(Long id, String firstName, String lastName, @Email @Pattern(regexp = "^\\w+\\.?\\w+@\\w+\\.[a-zA-Z]{2,4}$") String email, String password, String image) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.image = image;
//        this.product = product;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public Date getLastUpdated() {
        return lastUpdated;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    @PreUpdate
    @PrePersist
    public void updateTimeStamps() {
        lastUpdated = new Date();
        if (dateCreated==null) {
            dateCreated = new Date();
        }
    }
}