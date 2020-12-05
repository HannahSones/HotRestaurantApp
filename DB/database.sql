drop schema if exists reservationList;
CREATE SCHEMA reservationList;
USE reservationList;
CREATE TABLE customers (
  id INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email    VARCHAR(255) NOT NULL,
  mobile     VARCHAR(15),
  PRIMARY KEY (id)
  );
  
