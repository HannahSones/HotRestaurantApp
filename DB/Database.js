const { Sequelize, DataTypes } = require("sequelize");
const ck = require("ckey");
const password = ck.password;
const connection = new Sequelize("reservationList", "root", password, {
  host: "localhost",
  dialect: "mysql",
});

const Customer = connection.define(
  "customers",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING(255) },
    email: { type: DataTypes.STRING(255), allowNull: false },
    mobile: { type: DataTypes.INTEGER(15) },
  },
  {
    timestamps: false,
  }
);

Customer.sync();
connection.authenticate().then(() => {
  console.log("connected to DB");
});

async function insertData(booking) {
  try {
    const insert = await Customer.create({
      name: `${booking.name}`,
      email: `${booking.email}`,
      mobile: `${booking.phone}`,
    });
    console.log("Booking Added", insert);
  } catch (err) {
    console.log(err);
  }
}

async function getData() {
  try {
    const matches = await Customer.findAll({ raw: true });
    return matches;
  } catch (err) {
    console.log(err);
  }
}

/* insertData = function (booking) {
  return new Promise(function (resolve, reject) {
    connection.query(
      `INSERT INTO customers (name,email,mobile) VALUES ('${booking.name}','${booking.email}','${booking.phone}')`,
      function (err, rows) {
        console.log("err insert data =", err);
        console.log("rows insert data =", rows);
        if (err) {
          reject(new Error("It did not work"));
        } else {
          resolve();
        }
      }
    );
  });
}; */

// const getData = async () => {
//   const getSql = `SELECT * FROM customers`;

//     return connection.query(getSql, function (err, res){
//       if(err)throw err;
//       console.log("Querey to get =", res);
//       return res;
//     });

// };

/* getData = function () {
  return new Promise(function (resolve, reject) {
    connection.query(`SELECT * FROM customers`, function (err, rows) {
      if (rows === undefined) {
        reject(new Error("Error rows is undefined"));
      } else {
        resolve(rows);
      }
    });
  });
}; */

deleteQuery = function (body) {
  return new Promise(function (resolve, reject) {
    connection.query(
      `DELETE FROM customers WHERE id = ${body.id} AND email = '${body.email}'`,
      function (err, rows) {
        if (rows === undefined) {
          reject(new Error("Error rows is undefined"));
        } else {
          resolve(rows);
        }
      }
    );
  });
};

module.exports = {
  insertData: insertData,
  getData: getData,
  deleteQuery: deleteQuery,
};
