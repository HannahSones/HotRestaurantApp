const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Br@ntwood34",
  database: "reservationList",
});

connection.connect(function (err){
  if(err)throw err;
  console.log("database connected");
});

// const insertData = async (booking) => {
  
//     connection.query(
//       `INSERT INTO customers (name,email,mobile) VALUES ('${booking.name}','${booking.email}','${booking.phone}')`,
//       function (err, res) {
//         if (err) console.log(err);
//         console.log("Table booked", res);
//       }
//     );

// };

insertData = function(booking){
  return new Promise(function(resolve, reject){
    connection.query(
      `INSERT INTO customers (name,email,mobile) VALUES ('${booking.name}','${booking.email}','${booking.phone}')`, 
        function(err, rows){  
          console.log("err insert data =", err);                                              
          console.log("rows insert data =", rows);                                              
            if(err){
                reject(new Error("It did not work"));
            }else{
                resolve();
            }
        }
    )}
)}

// const getData = async () => {
//   const getSql = `SELECT * FROM customers`;

//     return connection.query(getSql, function (err, res){
//       if(err)throw err; 
//       console.log("Querey to get =", res);
//       return res;
//     });

// };

getData = function(){
  return new Promise(function(resolve, reject){
    connection.query(
      `SELECT * FROM customers`, 
        function(err, rows){                                                
            if(rows === undefined){
                reject(new Error("Error rows is undefined"));
            }else{
                resolve(rows);
            }
        }
    )}
)}

module.exports = {
  "insertData": insertData,
  "getData": getData
}