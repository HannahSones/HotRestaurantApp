const express = require("express");
const path = require("path");
const { getMaxListeners } = require("process");
const Booking = require("./Booking");
const booking = require("./Booking");

const app = express();
const PORT = 3000;

var bookings = [
  {
    name: "corey",
    email: "Corey@gmail.com",
    phoneNumber: 07979797979,
    id: "Corey",
  },
  {
    name: "corey",
    email: "Corey@gmail.com",
    phoneNumber: 07979797979,
    id: "Corey",
  },
  {
    name: "corey",
    email: "Corey@gmail.com",
    phoneNumber: 07979797979,
    id: "Corey",
  },
];
/* const newBooking = new Booking(name, number, email, id); */

/* if (reservations.length === 5) {
  waitList.push(newBooking);
} else {
  reservations.push(newBooking);
} */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static("../Client"));

app.get("/tables", function (req, res) {
  res.json(bookings);
});

app.listen(PORT, function () {
  console.log("Server is listening on Port ", PORT);
});
