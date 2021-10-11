
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (1111, 'Ethereum2', 'ETH', 'coin', 94.83, 66.83, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (2221, 'Bitcoin2', 'BTC', 'coin', 35.08, 26.88, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (3331, 'Hex2', 'HEX', 'erc20Token', 94.83, 66.83, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (4441, 'ChainLink2', 'LINK', 'erc20Token', 35.08, 26.88, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (5551, 'Ripple2', 'XRP', 'coin', 94.83, 66.83, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (6661, 'Cardano2', 'ADA', 'coin', 94.83, 66.83, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (7771, 'Aave2', 'AAVE', 'erc20Token', 35.08, 26.88, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (8881, 'Stellar2', 'XLM', 'coin', 94.83, 66.83, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (9991, 'Neo2', 'NEO', 'coin', 94.83, 66.83, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (1121, 'Monero2', 'XMR', 'coin', 94.83, 66.83, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (1221, 'Compound2', 'COMP', 'erc20Token', 94.83, 66.83, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (1331, 'Litecoin2', 'LTC', 'coin', 94.83, 66.83, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
  (1441, 'Yearn2', 'YFI', 'coin', 94.83, 66.83, 120005);
INSERT INTO Product (id, coin_name, symbol, category, retail_price, discounted_price, volume) VALUES
(1551, 'Polygon2', 'MATIC', 'coin', 94.83, 66.83, 120005);


--USER
INSERT INTO USER_ (id, date_created, last_updated, first_name, last_name, email, password, image)
VALUES (71111,  '9/30/2021', '10/30/2021', 'tom',   'maestas',  'thomasm1.maestas@gmail.com', 'passwd', 'http://tmm.net/images');

--POST
insert into post(id, did, date_, author, month_order, cat3, title, post, blogcite, username)
values(10011,'did1','date_1', 'author','monthOrder1','cat3', 'title1', 'post1', 'blogcite1', 'username1');

insert into post(id, did, date_, author, month_order, cat3, title, post, blogcite, username)
values(10021,'did2','date_2', 'author','monthOrder2','cat23', 'title2', 'post2', 'blogcite2', 'username2');

insert into post(id, did, date_, author, month_order, cat3, title, post, blogcite, username)
values(10031,'did3','date_3', 'author3','monthOrder3','cat33', 'title3', 'post3', 'blogcite3', 'username3');

COMMIT;