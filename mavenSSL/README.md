###CryptoMaven App
#####Author: Thomas Maestas
#####Design: Application to compare trading pairs ETH-BTC-HEX-USDT
#####Technology
* Java Spring/Maven backend app
* PostgreSQL Data Layer, on AWS RDS
* UI: ThymeLeaf
* AWS EC2 Server hosting app

#####Envs: qa, dev, test, prod determine application.properties 
```shell
#spring.profile.active=qa
#spring.profile.active=dev
spring.profile.active=test
#spring.profile.active=prod
```

#####Env Instructions:
* dev: H2-console; Uncomment App Runner & DevOps classes.
* test: local PostgreSQL instance; localhost:5432/postgres
* prod: AWS; jdbc:postgresql://commuterlink.cmcadlepsyx9.us-east-1.rds.amazonaws.com:5432/rideforce #u: admin1 #pw: ${POSTGRES_PW}
* Comment DevOps & App Runner

DATA:
-- USER_
DROP TABLE IF EXISTS USER_;
CREATE TABLE USER_ (
id BIGINT, Primary Key (foreign key of products)
date_created VARCHAR (40),  << Date membership started “dateCreated”
last_updated VARCHAR(40),   << Most recent Login  “lastUpdated”
first_name VARCHAR(40),    “firstName”
last_name VARCHAR(40),     “lastName”
email VARCHAR(40),        << email is the username.
password VARCHAR(40),
image VARCHAR(200),    << user uploads photo
posts ARRAY of post objects   << User writes many posts
products ARRAY of product objects); << Users subscribes to many products

-- POST
DROP TABLE IF EXISTS POST;
CREATE TABLE POST (
id BIGINT,   << Primary Key (Foreign key with the User)
did VARCHAR(20),     << this number is unique with dates
date_ VARCHAR (40),
author VARCHAR(100),  << this gives user option to write alias name
cat3 VARCHAR(110),  << 5 Categories: Musing Blockchain, A.I.Now., etc.
title VARCHAR(110),  << blog title
post VARCHAR(50000),  >> post (Type: String)
blog_cite VARCHAR(3000),  >> citations (Type: Array of Strings)
user_name VARCHAR(100));

-- PRODUCT   (Topics of Interest subscribed to)

DROP TABLE IF EXISTS PRODUCT;
CREATE TABLE Product (
id BIGINT,
version NUMERIC(20),
coin_name VARCHAR(250),
coin_description VARCHAR(8000),
symbol VARCHAR(20),
category VARCHAR(250),
retail_price DECIMAL(10,2),
discounted_price DECIMAL(10,2),
volume DECIMAL(10,2),
price DECIMAL(10,2),
image_url VARCHAR(500),
users_subscribed ARRAY of users); >> for example, “Topic (Product) Ethereum has 52 users subscribed, user #1, #45, #200”
