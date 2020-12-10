$(document).ready(function () {
  //reserve html
  const contactName = $("#inputName");
  const phoneNumber = $("#inputPhoneNumber");
  const emailAddress = $("#inputEmail");
  const reserveForm = $("#reserveForm");
  const deleteForm = $("#deleteForm");
  const deleteEmail = $("#deleteEmail");
  const deleteID = $("#resID");
  // const viewTables = $(".view-table");
  // viewTables.on("click","button", makeCall);

  reserveForm.submit(function (event) {
    event.preventDefault();
    console.log({ event });
    const name = contactName.val();
    const email = emailAddress.val();
    const phone = phoneNumber.val();
    console.log("Data received");
    console.log(name, email, phone);

    const reservation = {
      name: name,
      email: email,
      phone: phone,
    };
    console.log("reserve =", reservation);

    $.ajax({
      type: "POST",
      url: "/api/reserve",
      data: reservation,
      success: () => {
        console.log("success! The server has received your data.");

        // Clear the form when submitting
        contactName.val("");
        emailAddress.val("");
        phoneNumber.val("");
      },
      error: (error) => {
        console.log("error", error);
      },
    });
  });

  deleteForm.submit(function (event) {
    event.preventDefault(event);
    console.log(deleteEmail.val());
    console.log(deleteID.val());
    const data = {
      email: deleteEmail.val(),
      id: deleteID.val(),
    };
    $.ajax({
      type: "DELETE",
      url: "/tables",
      data: data,
      success: () => {
        console.log("Deleted");
      },
      error: (error) => {
        console.log("error", error);
      },
    });
  });
});
