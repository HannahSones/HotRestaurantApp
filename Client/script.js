const contactName = $("#inputName");
const phoneNumber = $("#inputPhoneNumber");
const emailAddress = $("#inputEmail");
const id = $("#uniqueID");
const reserveForm = $("#reserveForm");

reserveForm.submit(function (event) {
  event.preventDefault();
  const name = contactName.val();
  const email = emailAddress.val();
  const phone = phoneNumber.val();
  const uniqueID = id.val();
  console.log("hello");
  $.post(
    "/tables",
    {
      name: `${name}`,
      email: `${email}`,
      phoneNumber: `${phone}`,
      id: `${uniqueID}`,
    },
    function (data, status) {
      console.log("All bookings", data, status);
    }
  );
});
