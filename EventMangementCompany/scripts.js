// contact us form validation
function validation() {
    if (document.contact.firstname.value == "") {
      alert('Please enter your First Name');
      return false;
    }
    else if (document.contact.lastname.value == "") {
      alert('Please enter your last name');
      return false;
    }
    else if (document.contact.email.value == "") {
      alert("Please enter email");
      return false;
    }
    else if (document.contact.phoneno.value == "") {
      alert("Enter valid phone number");
      return false;
    }
    else if (document.contact.country.value == "Default") {
      alert('Please enter your Country');
      return false;
    }
    else if (document.contact.eventdetails.value == "") {
      alert('Please enter your Event Details!');
      return false;
    }
  }
