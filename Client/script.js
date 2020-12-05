
$(document).ready(function(){

  //reserve html
  const contactName = $("#inputName");
  const phoneNumber = $("#inputPhoneNumber");
  const emailAddress = $("#inputEmail");
  const id = $("#uniqueID");
  const reserveForm = $("#reserveForm");



  // const viewTables = $(".view-table");
  // viewTables.on("click","button", makeCall);

  reserveForm.submit(function (event) {
    event.preventDefault();

    const name = contactName.val();
    const email = emailAddress.val();
    const phone = phoneNumber.val();
    const uniqueId = id.val();
    console.log("Data received");
    console.log(name, email, phone, uniqueId); 
    const reserve = {
      "name": name,
      "email": email,
      "phone": phone,
      "id": uniqueId
    };
    console.log("reserve =", reserve);
  
    $.ajax({
      type: "POST",
      url: "/api/reserve",
      data: reserve,
      success: () => { 
        console.log('success! The server has received your data.'); 

        // Clear the form when submitting
        contactName.val("");
        emailAddress.val("");
        phoneNumber.val("");
        id.val("");
      },
      error: (error) => { console.log('error', error); }
    });
  });



});
