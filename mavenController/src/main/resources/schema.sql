DROP TABLE IF EXISTS TBL_EMPLOYEES;
  
CREATE TABLE Product (
  id BIGINT,
  name VARCHAR(250),
  category VARCHAR(250),
  retailPrice DECIMAL(10,2),
  discountedPrice DOUBLE,
  availability BOOLEAN
);