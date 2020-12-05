CREATE SCHEMA reservationList;
USE reservationList;
CREATE TABLE customers (
  id INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  surname    VARCHAR(255) NOT NULL,
  mobile     VARCHAR(15),
  PRIMARY KEY (id)
  );
