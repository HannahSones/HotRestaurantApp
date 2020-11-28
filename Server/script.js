const Booking = require("./Booking")
const Server = require("./Server")

const contactName = $("#inputName");
const phoneNumber = $("#inputPhoneNumber");
const emailAddress = $("#inputEmail");
const submitForm = $("#submitForm");



submitForm.submit(function (event) {
    event.preventDefault()
    const newBooking = new Booking(contactName.val,  phoneNumber.val, emailAddress.val);
    Server.bookings.push(newBooking);

$.ajax({
    type: "POST",
    url: "/tables",
    data: data,
    success: success,
    dataType: dataType
  });