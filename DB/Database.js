const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "reservationList",
});

connection.connect(function (err) {
  if (err) console.log("Cannot Connect", err);
  connection.query(getData(), function (err, res) {
    if (err) console.log(err);
    console.log("Query For All", res);
  });
});

const insertData = (booking) => {
  return `INSERT INTO customers (first_name,surname,mobile) VALUES ('${booking.firstName}','${booking.lastName}',${booking.mobile})`;
};

const getData = () => `SELECT * FROM customers`;
