const express = require("express");
const path = require("path");
const Booking = require("./Booking");
const booking = require('./Booking');

const app = express();
const PORT = 3000;



// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservations = [];

let waitList = [];

const newBooking = new Booking(name, number, email, id);

if (reservations.length === 5){
  waitList.push(newBooking);
}else{
  reservations.push(newBooking);
}



app.listen(PORT, function () {
  console.log("Server is listening on Port ", PORT);
});
