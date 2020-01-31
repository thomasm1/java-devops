
DELETE electrolot where username = 'new';
DELETE electrolot where balance = 0;
delete electrolot where carid = '93';--'me' AND offerid=11;
DELETE usertable where username = 'new';--'me' AND offerid=11;
DELETE cartable where carid = '93';--'me' AND offerid=11; 
DELETE offertable where offerid = '';--'me' AND offerid=11; 

SELECT * from electrolot;
SELECT * from offertable;
SELECT * from usertable;
SELECT * from usertable WHERE username = 'joshallen';
SELECT * from cartable;
SELECT * from cartable WHERE carmodel LIKE 'CyberTruck%';
SELECT o.username,  o.carid,  o.offerstatus,  o.offermos, c.carid, c.carmake, c.carmodel, c.pricetotal FROM offertable o JOIN cartable c ON c.carid = o.carid WHERE o.offerstatus = 'APPROVED' AND o.username = 'me';
SELECT o.username,  o.caridd  o.offerstatus,  o.offermos, c.carid, c.carmake, c.carmodel, c.pricetotal FROM offertable o JOIN cartable c ON c.carid = o.carid WHERE o.offerstatus = 'REJECTED' AND o.username = 'abc';
COMMIT;
--------------- 
DROP SEQUENCE id_maker;
CREATE SEQUENCE id_maker 
    MINVALUE 1 
    START WITH 1 
    INCREMENT BY 1; 
----------------------------------------------------------
-----------USERTABLE-------------------------------------- 
 
DROP TABLE usertable;
CREATE TABLE usertable (
    userid NUMBER(10),
    username VARCHAR2(20) NOT NULL,
    password VARCHAR2 (20) NOT NULL,
    fullname VARCHAR2(200),
    iscust NUMBER (1) DEFAULT (1) NOT NULL,
    isowner NUMBER (1) DEFAULT (0),
    constraint pk_username PRIMARY KEY (username));

DROP SEQUENCE id_maker_th;
CREATE SEQUENCE id_maker_th 
    MINVALUE 1000
    START WITH 1000
    INCREMENT BY 1;
    
INSERT INTO usertable VALUES (id_maker_th.nextval,  'myUserName0', 'myPassword0', 'myFullName0',0,0);
INSERT INTO usertable VALUES (id_maker_th.nextval,  'myUserName1', 'myPassword1', 'myFullName1',1,0);
INSERT INTO usertable VALUES (id_maker_th.nextval, 'myUserName2', 'myPassword2', 'myFullName2',1,0);
INSERT INTO usertable VALUES (id_maker_th.nextval, 'myUserName3', 'myPassword3', 'myFullName3',1,1);  
SELECT * FROM usertable;
COMMIT;
---------------PROC---------add_new_user
create or replace PROCEDURE add_new_user(username VARCHAR2, password VARCHAR2, fullname VARCHAR2, iscust NUMBER, isowner NUMBER)
IS
BEGIN
INSERT INTO usertable VALUES (id_maker.nextval, username, password, fullname, iscust, isowner); --id_maker.nextval, 
END;
---------------PROC---------add_new_user

------------------------------------------------------------
-------------CARTABLE----------------------------------------
    
DROP TABLE cartable; 
CREATE TABLE cartable (
    carid NUMBER(4), 
    carmake VARCHAR2 (20),
    carmodel VARCHAR2 (20),
    pricetotal NUMBER(7,2),  
    purchased NUMBER(1) DEFAULT 0,
    constraint pk_cid PRIMARY KEY (carid));
    
DROP SEQUENCE id_maker;
CREATE SEQUENCE id_maker 
    MINVALUE 1 
    START WITH 1 
    INCREMENT BY 1;
    
INSERT INTO cartable VALUES (id_maker.nextval,'Ford', 'Focus', 36000.00, 0);
INSERT INTO cartable VALUES (id_maker.nextval,'Tesla', 'Cyber-Truck', 38000.00, 0);
INSERT INTO cartable VALUES (id_maker.nextval,'Chevrolet', 'Corvette', 70000.00, 0);
INSERT INTO cartable VALUES (id_maker.nextval,'Jeep', 'Wrangler', 56000.00, 0);
COMMIT; 
SELECT * FROM cartable; 

--customer view of lot
SELECT * FROM cartable WHERE purchased=1;
SELECT * FROM cartable WHERE purchased=0;
--customer-owned cars 
--SELECT * FROM pocketable INNER JOIN stats ON pocketable.p_id = stats.p_id;
SELECT * FROM offertable left JOIN cartable ON offertable.carid = cartable.carid; --returns offer-car join
SELECT * FROM offertable WHERE offertable.username = 'abc' AND offertable.offerstatus = 'PENDING'; --returns status+owner
--/no work
--SELECT * FROM (SELECT * FROM offertable WHERE offertable.username = 'abc' AND offertable.offerstatus = 'PENDING') JOIN cartable ON offertable.carid = cartable.carid;
  SELECT  o.username,  o.carid,  o.offerstatus,  o.offermos, c.carid, c.carmake, c.carmodel, c.pricetotal FROM offertable o FULL JOIN cartable c ON c.carid = o.carid WHERE o.offerstatus = 'APPROVED' AND o.username = 'abc'; 
SELECT
  o.username,
  o.carid,
  o.offerstatus,
  o.offermos,
  
  c.carid,
  c.carmake,
  c.carmodel,
  c.pricetotal
FROM
  offertable o JOIN
  cartable c 
  ON c.carid = o.carid
WHERE
  o.offerstatus = 'APPROVED' AND
  o.username = 'abc'; 
--https://www.red-gate.com/simple-talk/sql/sql-training/subqueries-in-sql-server/ 
  --https://www.red-gate.com/simple-talk/sql/sql-training/subqueries-in-sql-server/ 
  SELECT o.username,  o.carid,  o.offerstatus,  o.offermos, c.carid, c.carmake, c.carmodel, c.pricetotal FROM offertable o JOIN cartable c ON c.carid = o.carid WHERE o.offerstatus = 'APPROVED' AND o.username = 'abc';
SELECT o.username,  o.carid,  o.offerstatus,  o.offermos, c.carid, c.carmake, c.carmodel, c.pricetotal FROM offertable o JOIN cartable c ON c.carid = o.carid WHERE o.offerstatus = 'APPROVED' AND o.username = 'abc';
---------------PROC-------------add_new_car
create or replace PROCEDURE add_new_car(carmake VARCHAR2, carmodel VARCHAR2, pricetotal NUMBER, purchased NUMBER)
IS
BEGIN
INSERT INTO cartable VALUES (id_maker.nextval, carmake, carmodel, pricetotal, purchased);   
END;
---------------PROC-------------add_new_car

---------------------------------------------------------------
----------------OFFERTABLE--------------------------------------
--DROP TABLE offer_type;
--DROP TABLE otype;
--DROP TABLE ostats; 
DROP TABLE offertable; 
CREATE TABLE offertable (
    offerid NUMBER(4),
    username VARCHAR2( 20), --FOREIGN username of offer
    carid NUMBER(4), --FOREIGN car_id of offer 
--    carprice NUMBER (7,2), --FOREIGN car_price
    offeramt NUMBER(7,2), 
    offermos NUMBER(2),
    offerstatus VARCHAR2 (20),
    constraint pk_oid PRIMARY KEY (offerid),
--    constraint fk_cprice FOREIGN KEY (c_price) REFERENCES cartable (carprice),
    constraint fk_uid FOREIGN KEY (username) REFERENCES usertable (username),
    constraint fk_cid FOREIGN KEY (carid) REFERENCES cartable (carid));
SELECT * FROM offertable;
-- 
--DROP SEQUENCE id_maker;
--CREATE SEQUENCE id_maker 
--    MINVALUE 1 
--    START WITH 1 
--    INCREMENT BY 1;

DROP SEQUENCE id_maker_th2;
CREATE SEQUENCE id_maker_th2 
    MINVALUE 2000
    START WITH 2000
    INCREMENT BY 1;

DROP SEQUENCE id_maker_th3;
CREATE SEQUENCE id_maker_th3 
    MINVALUE 3000
    START WITH 3000
    INCREMENT BY 1;
    
DROP SEQUENCE id_maker_th; 
CREATE SEQUENCE id_maker_th 
    MINVALUE 1000
    START WITH 1000
    INCREMENT BY 1;
    delete offertable where username='abc';
INSERT INTO offertable VALUES (id_maker_th.nextval,'def', 1001, 2000.00, 18, 'CANCELED');
INSERT INTO offertable VALUES (id_maker_th.nextval,'usernamem',1002, 3000.00, 0, 'DECLINED');
INSERT INTO offertable VALUES (id_maker_th.nextval,'username3', id_maker_th3.nextval, 4000.00, 18, 'ACCEPTED');
INSERT INTO offertable VALUES (id_maker_th.nextval, 'username4',id_maker_th3.nextval, 1000.00, 36, 'PENDING'); 
COMMIT;
SELECT * FROM offertable;
SELECT * FROM offertable WHERE username='def';
SELECT * FROM offertable WHERE username='abc';
-----------------------PROC------------add_new_offer-----------
create or replace PROCEDURE add_new_offer(username VARCHAR2, carid NUMBER, offeramt NUMBER, offermos NUMBER, offerstatus VARCHAR2)
IS
BEGIN
INSERT INTO offertable VALUES (id_maker.nextval, username, carid, offeramt, offermos, offerstatus);   
END;
-----------------------PROC------------add_new_offer-----------

---------------------------------------------------------------
--------------------ELECTROLOT---------------------------------
SELECT * from electrolot; 
DROP TABLE electrolot; 
CREATE TABLE electrolot (     
    id NUMBER(6),
    offerid NUMBER(6),
    carid NUMBER(6), 
    username VARCHAR2(20), 
    pricetotal NUMBER(10,2),  
    offeramt NUMBER(10,2),
    balance NUMBER (10,2),
    offermos NUMBER(4), 
    monthsremaining NUMBER (4),
    monthlypayments NUMBER (4),
    constraint pk_conid PRIMARY KEY (id));
--    constraint fk_offerid FOREIGN KEY (offerid) REFERENCES offertable (offerid),
--    constraint fk_username FOREIGN KEY (username) REFERENCES usertable (username),
--    constraint fk_carid FOREIGN KEY (carid) REFERENCES cartable (carid),
--    constraint fk_pricetotal FOREIGN KEY (pricetotal) REFERENCES cartable (pricetotal),
--    constraint fk_offeramt FOREIGN KEY (offeramt) REFERENCES offertable (offeramt),
--    constraint fk_offermos FOREIGN KEY (offermos) REFERENCES offertable (offermos),
    
--DROP SEQUENCE id_maker_th;
CREATE SEQUENCE id_maker_th 
    MINVALUE 1000 
    START WITH 1000 
    INCREMENT BY 1;
    
--DROP SEQUENCE id_maker;
CREATE SEQUENCE id_maker 
    MINVALUE 1 
    START WITH 1 
    INCREMENT BY 1;

--DROP SEQUENCE id_maker2;
CREATE SEQUENCE id_maker2 
    MINVALUE 1 
    START WITH 1 
    INCREMENT BY 1;

--DROP SEQUENCE id_maker3;
CREATE SEQUENCE id_maker3 
    MINVALUE 1 
    START WITH 1 
    INCREMENT BY 1;
    DROP SEQUENCE id_maker3;

--DROP SEQUENCE id_maker4;
CREATE SEQUENCE id_maker4 
    MINVALUE 1 
    START WITH 1 
    INCREMENT BY 1;
INSERT INTO electrolot VALUES (id_maker.nextval_th, id_maker2.nextval, id_maker2.nextval,'usernameX',null,null,null,null, null,null); 

INSERT INTO electrolot VALUES (100,1,1,1,null,null,null, null,null); 
COMMIT;
SELECT * FROM electrolot;
select * fROM cartable;
-----------------------PROC------------add_new_elecrolot-----------
create or replace PROCEDURE add_new_electrolot( offerid NUMBER, carid NUMBER, username VARCHAR2, pricetotal NUMBER, offeramt NUMBER, balance NUMBER, offermos NUMBER, monthsremaining NUMBER, monthlypayments NUMBER)
IS
BEGIN
INSERT INTO electrolot VALUES (id_maker.nextval, offerid, carid, username, pricetotal, offeramt, balance, offermos, monthsremaining, monthlypayments); --id_maker.nextval, 
END;
-----------------------PROC------------add_new_elecrolot-----------