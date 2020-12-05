const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "reservationList",
});

const insertData = (booking) => {
  connection.connect(function (err) {
    if (err) console.log("Cannot Connect", err);
    connection.query(
      `INSERT INTO customers (name,email,mobile) VALUES ('${booking.name}','${booking.email}','${booking.phone}')`,
      function (err, res) {
        if (err) console.log(err);
        console.log("Table booked", res);
      }
    );
  });
};

const getData = () => `SELECT * FROM customers`;

module.exports = insertData;
