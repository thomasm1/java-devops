package net.mavenControllers.crypto.coins.dashboard.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity  
//defining class name as Table name  
@Table  
public class Product {
	
	@Id
	//@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column 
    private Long id;
	
	@Column(name="name")
    private String name;

    @Column(name="symbol")
    private String symbol;

    @Column(name = "category")
    private String category;
	
	@Column(name = "retail_price")
    private Double retailPrice;
	
	@Column(name = "discounted_price")
    private Double discountedPrice;
	
	@Column(name = "volume")
    private Double volume;

    public Product() {
    }

    public Product(Long id, String name, String symbol, String category, Double retailPrice, Double discountedPrice, Double volume) {
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.category = category;
        this.retailPrice = retailPrice;
        this.discountedPrice = discountedPrice;
        this.volume = volume;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Double getRetailPrice() {
        return retailPrice;
    }

    public void setRetailPrice(Double retailPrice) {
        this.retailPrice = retailPrice;
    }

    public Double getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(Double discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public Double getvolume() {
        return volume;
    }

    public void setvolume(Double volume) {
        this.volume = volume;
    }
}
