DROP TABLE IF EXISTS TBL_EMPLOYEES;
  
CREATE TABLE Product (
  id BIGINT,
  name VARCHAR(250),
  symbol VARCHAR(10),
  category VARCHAR(250),
  retail_price DECIMAL(10,2),
  discounted_price DOUBLE,
  volume DOUBLE
);