http://www.newthinktank.com/2019/03/jpa-maven-hibernate-tutorial/
————— pom.xml ————— 

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  
  <!-- 1. New -> Maven Project (Quick Start)
  Group Id : com.newthinktank
  Artifact ID : JEETut3
  Update the dependencies here
  Maven is project management software that handles builds, dependencies, documentation and more
   -->

  <groupId>com.newthinktank</groupId>
  <artifactId>JEETut3</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>jar</packaging>

  <name>JEETut3</name>
  <url>http://maven.apache.org</url>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>

  <dependencies>
  
  <dependency>
        <groupId>org.hibernate</groupId>
        <artifactId>hibernate-core</artifactId>
        <version>5.4.1.Final</version>
    </dependency>

	<dependency>
    	<groupId>org.hibernate</groupId>
    	<artifactId>hibernate-entitymanager</artifactId>
    	<version>5.4.1.Final</version>
	</dependency>

	<dependency>
    	<groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.15</version>
        <scope>provided</scope>
    </dependency>
  
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>

<!-- CREATE DATABASE
mysql -u root -p
CREATE DATABASE test4;
USE test4;
CREATE TABLE customer(
firstName VARCHAR(30) NOT NULL,
lastName VARCHAR(30) NOT NULL,
custID INT UNSIGNED NOT NULL PRIMARY KEY);

DESCRIBE customer;

CREATE USER 'dbadmin'@'localhost' IDENTIFIED BY 'turtledove';

GRANT ALL PRIVILEGES ON test4.customer TO 
'dbadmin'@'localhost' IDENTIFIED BY 'turtledove';
 -->

<!-- 
2. Create new package com.newthinktank.JEETut3 
3. Create Customer.java in the package
-->

 


————— Customer.java —————

package com.newthinktank.JEETut3;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/*
 * 2. The Java Persistance API (JPA) makes it easy to use object data with
 * a database. With it you can Persist object data in a database. 
 * 
 * Hibernate is a Object Relational Mapping system that implements JPA. 
 */

// Entity defines which objects should be persisted in the database
@Entity
// Defines the name of the table created for the entity
@Table(name = "customer")
public class Customer implements Serializable {
	private static final long serialVersionUID = 1L;
	
	// All entities must define a primary key which you define with
	// the @Id annotation
	@Id
	
	// You can override the default column name 
	// Map id to the CustID field in the DB
	// You can have it auto generate
	// @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "custID", unique = true)
	private int id;
	
	@Column(name = "firstName", nullable = false)
    private String fName;

    @Column(name = "lastName", nullable = false)
    private String lName;
	
    public int getID() {
        return id;
    }

    public void setID(int id) {
        this.id = id;
    }
    
    public String getFName() {
        return fName;
    }

    public void setFName(String fName) {
        this.fName = fName;
    }
    
    public String getLName() {
        return lName;
    }

    public void setLName(String lName) {
        this.lName = lName;
    }
	
}

// 4. Right Click Project -> New -> Source Folder -> name it resources
// Create folder in it named META-INF
// Create persistence.xml file in META-INF




 

————— persistence.xml —————

<?xml version="1.0" encoding="UTF-8"?>

<!-- 
2. This file defines classes you wish to persist. How these classes are 
mapped to database tables. Database driver, location, userid and pw
 -->

<persistence version="2.0"
    xmlns="http://java.sun.com/xml/ns/persistence" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://java.sun.com/xml/ns/persistence http://java.sun.com/xml/ns/persistence/persistence_2_0.xsd">
    
    <!-- Define a name used to get an entity manager. Define that you will 
    complete transactions with the DB  -->
    <persistence-unit name="JEETut3" transaction-type="RESOURCE_LOCAL">
    
        <!-- Define the class for Hibernate which implements JPA -->
        <provider>org.hibernate.jpa.HibernatePersistenceProvider</provider>
        <!-- Define the object that should be persisted in the database -->
        <class>com.newthinktank.JEETut3.Customer</class>
        <properties>
            <!-- Driver for DB database -->
            <property name="javax.persistence.jdbc.driver" value="com.mysql.jdbc.Driver" />
            <!-- URL for DB -->
            <property name="javax.persistence.jdbc.url" value="jdbc:mysql://localhost/test4" />
            <!-- Username -->
            <property name="javax.persistence.jdbc.user" value="dbadmin" />
            <!-- Password -->
            <property name="javax.persistence.jdbc.password" value="turtledove" />
        </properties>
    </persistence-unit>
</persistence>

<!-- 5. Create TestSystem.java —>

 




————— TestSystem.java —————

package com.newthinktank.JEETut3;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.NoResultException;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

public class TestSystem {
    // Create an EntityManagerFactory when you start the application
    private static final EntityManagerFactory ENTITY_MANAGER_FACTORY = Persistence
            .createEntityManagerFactory("JEETut3");
    
    public static void main(String[] args) {
    	addCustomer(1, "Sue", "Smith");
	addCustomer(2, "Sam", "Smith");
	addCustomer(3, "Sid", "Smith");
	addCustomer(4, "Sally", "Smith");
	getCustomer(1);
	getCustomers();
	changeFName(4, "Mark");
	deleteCustomer(3);    	
    	ENTITY_MANAGER_FACTORY.close();
    }
    
    public static void addCustomer(int id, String fname, String lname) {
        // The EntityManager class allows operations such as create, read, update, delete
        EntityManager em = ENTITY_MANAGER_FACTORY.createEntityManager();
        // Used to issue transactions on the EntityManager
        EntityTransaction et = null;

        try {
            // Get transaction and start
            et = em.getTransaction();
            et.begin();

            // Create and set values for new customer
            Customer cust = new Customer();
            cust.setID(id);
            cust.setFName(fname);
            cust.setLName(lname);

            // Save the customer object
            em.persist(cust);
            et.commit();
        } catch (Exception ex) {
            // If there is an exception rollback changes
            if (et != null) {
                et.rollback();
            }
            ex.printStackTrace();
        } finally {
            // Close EntityManager
            em.close();
        }
    }
    
    public static void getCustomer(int id) {
    	EntityManager em = ENTITY_MANAGER_FACTORY.createEntityManager();
    	
    	// the lowercase c refers to the object
    	// :custID is a parameterized query thats value is set below
    	String query = "SELECT c FROM Customer c WHERE c.id = :custID";
    	
    	// Issue the query and get a matching Customer
    	TypedQuery<Customer> tq = em.createQuery(query, Customer.class);
    	tq.setParameter("custID", id);
    	
    	Customer cust = null;
    	try {
    		// Get matching customer object and output
    		cust = tq.getSingleResult();
    		System.out.println(cust.getFName() + " " + cust.getLName());
    	}
    	catch(NoResultException ex) {
    		ex.printStackTrace();
    	}
    	finally {
    		em.close();
    	}
    }
    
    public static void getCustomers() {
    	EntityManager em = ENTITY_MANAGER_FACTORY.createEntityManager();
    	
    	// the lowercase c refers to the object
    	// :custID is a parameterized query thats value is set below
    	String strQuery = "SELECT c FROM Customer c WHERE c.id IS NOT NULL";
    	
    	// Issue the query and get a matching Customer
    	TypedQuery<Customer> tq = em.createQuery(strQuery, Customer.class);
    	List<Customer> custs;
    	try {
    		// Get matching customer object and output
    		custs = tq.getResultList();
    		custs.forEach(cust->System.out.println(cust.getFName() + " " + cust.getLName()));
    	}
    	catch(NoResultException ex) {
    		ex.printStackTrace();
    	}
    	finally {
    		em.close();
    	}
    }
    
    public static void changeFName(int id, String fname) {
        EntityManager em = ENTITY_MANAGER_FACTORY.createEntityManager();
        EntityTransaction et = null;
        
    	Customer cust = null;

        try {
            // Get transaction and start
            et = em.getTransaction();
            et.begin();

            // Find customer and make changes
            cust = em.find(Customer.class, id);
            cust.setFName(fname);

            // Save the customer object
            em.persist(cust);
            et.commit();
        } catch (Exception ex) {
            // If there is an exception rollback changes
            if (et != null) {
                et.rollback();
            }
            ex.printStackTrace();
        } finally {
            // Close EntityManager
            em.close();
        }
    }
    
    public static void deleteCustomer(int id) {
    	EntityManager em = ENTITY_MANAGER_FACTORY.createEntityManager();
        EntityTransaction et = null;
        Customer cust = null;

        try {
            et = em.getTransaction();
            et.begin();
            cust = em.find(Customer.class, id);
            em.remove(cust);
            et.commit();
        } catch (Exception ex) {
            // If there is an exception rollback changes
            if (et != null) {
                et.rollback();
            }
            ex.printStackTrace();
        } finally {
            // Close EntityManager
            em.close();
        }
    }
} // Right click and run this file as a Java Application