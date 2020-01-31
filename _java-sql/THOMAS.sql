--SQL Day 2
-- SQL is Scripting language (not compiled)
-- SQL is Query language (can run independent chunks of code) 
-- SQL Keywords: SeLeCt = SELECT
-- DML does not autocommit.

--## Data Definition Language (DDL)  - CREATE, ALTER, RENAME, DROP, TRUNCATE
DROP tABLE pokemon;
DROP tABLE pokemon_type;

CREATE TABLE pokemon (
    p_id NUMBER(10),    
    name VARCHAR2(20),
    type VARCHAR2(20),
    bio VARCHAR2(500),
    lvl NUMBER(10),
    shiny NUMBER(1)); 
    
TRUNCATE TABLE pokemon; --? 

--## Data Manipulation Language:  INSERT, DELETE, UPDATE
INSERT INTO pokemon VALUES(2,'bulbasaur', 'grass/poison', 'first pokemon', 8,1);
INSERT INTO pokemon VALUES(99,'charizard', 'Solar Power', 'https://bulbapedia.bulbagarden.net/wiki/File:006Charizard.png', 10,0);
INSERT INTO pokemon VALUES (111, 'Mudkip', 'Water', 'He cute pokemanz', 5, 1);
INSERT INTO pokemon VALUES (151, 'Mew', 'Psychic', 'The first legendary', 35, 0);
INSERT INTO pokemon VALUES (69, 'Execute', 'Grass/Physic', 'This Pokémon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Execute is close to evolution.', 5, 0);
INSERT INTO pokemon VALUES (150, 'Mewtwo', 'PSYCHIC', 'Genetic Pokemon', 9, 1);
INSERT INTO pokemon VALUES (7, 'Aipom', 'Normal', 'Three handed monkey', 100, 0);
INSERT INTO pokemon VALUES (2, 'Charmander', 'Fire', 'It breathes fire.', 6, 0);
INSERT INTO pokemon VALUES (11, 'Zubat', 'Flying/Poison', 'bat thing', 5, 1);
INSERT INTO pokemon VALUES (8, 'Raichu', 'Electric', 'The Originals', 1, 1);
INSERT INTO pokemon VALUES (25,'Hitmonchan','Fighting','Steroids are strong with this one',100,1);
INSERT INTO pokemon VALUES (106, 'Hitmonleee', 'Fighting', 'The kicking fiend', 23, 0);
INSERT INTO pokemon VALUES (99,'Charizard', 'Fire', 'https://bulbapedia.bulbagarden.net/wiki/File:006Charizard.png', 10,0);
commit;

DELETE pokemon WHERE lvl > 10;
DELETE pokemon WHERE p_id BETWEEN  24 AND 26;

--DML (still), not autocommited.
UPDATE pokemon SET lvl = 100 WHERE lvl >50;
--DROP tABLE pokemon;


-- ## DQL Data Query Language - SELECT
SELECT * FROM pokemon ORDER BY p_id;

SELECT p_id, name,lvl FROM pokemon WHERE lvl >= 10; 
SELECT p_id, name,lvl FROM pokemon WHERE REGEXP_LIKE (name, '^[A-C]+') ;
 
--Aliases
SELECT p.name, p.lvl FROM pokemon p WHERE p.name = 'Aipom';

--ORDER BY
SELECT p.p_id, p.name, p.lvl FROM pokemon p WHERE p.p_id  > 10 ORDER BY p.p_id DESC; --ASC;
 
--AVG, MAX, COUNT
SELECT MAX(lvl), MIN(p_id) from pokemon;
SELECT COUNT(shiny) FROM pokemon where shiny = 1;

-- GROUP BY  is used with aggregate functions to break records into grps/buckets
SELECT type, AVG(lvl) as "Average Level", COUNT(type) FROM pokemon GROUP BY type;
rollback;
SELECT MOD(p_id, 5),AVG(lvl), COUNT(p_id) FROM pokemon GROUP BY MOD(p_id, 5);

--HAVING is an extra clause we use with GROUP BY because Oracle won't let you use WHERE. 
--WHERE only filters out records to return, but GROUP BY returns 
-- groups 
SELECT type, COUNT(type), AVG(lvl) from pokemon GROUP BY type HAVING type LIKE 'F%';
SELECT type, COUNT(type), AVG(lvl) from pokemon GROUP BY type HAVING type LIKE '%c';

SELECT COUNT(type), type, AVG(lvl) from pokemon GROUP BY type ORDER BY AVG(LVL); --grouped by type!!!!
            -- here couldn't order by p_id because working only with groups!!!

-- Subqueries
SELECT * FROM pokemon WHERE lvl = (SELECT MIN(lvl) FROM pokemon);

UPDATE pokemon SET lvl = 50 WHERE lvl =(SELECT MIN(lvl) FROM pokemon);

SELECT p_id, name, lvl FROM pokemon ORDER BY lvl desc;
SELECT * FROM(SELECT p_id, name, lvl FROM pokemon ORDER BY lvl desc) WHERE ROWNUM <=6;

-- GAP here

--Junction Table
--These are used for tables that have a Many-to-Many relationship.

CREATE TABLE pokemon_type (
    p_id NUMBER(10),
    T_ID NUMBER(10));
commit;