// FormValidator.js
export function validateForm() {
    var firstName = document.myForm.firstName.value;
    var lastName = document.myForm.lastName.value;
    var userEmail = document.myForm.userEmail.value;
  
    // First name validation
    if (firstName === "") {
      alert("First name is required. Please enter a valid first name.");
      document.myForm.firstName.focus();
      return false;
    }
  
    if (!/^[a-zA-Z]*$/.test(firstName)) {
      alert(
        "First name must contain only alphabetic characters. Please enter a valid first name."
      );
      document.myForm.firstName.focus();
      return false;
    }
  
    // Last name validation
    if (lastName === "") {
      alert("Last name is required. Please enter a valid last name.");
      document.myForm.lastName.focus();
      return false;
    }
  
    if (!/^[a-zA-Z]*$/.test(lastName)) {
      alert(
        "Last name must contain only alphabetic characters. Please enter a valid last name."
      );
      document.myForm.lastName.focus();
      return false;
    }
  
    // Email validation
    if (userEmail === "") {
      alert("Email address is required. Please enter a valid email.");
      document.myForm.userEmail.focus();
      return false;
    }
  
    // Validate email using regular expression
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z.0-9-]+)*$/;
    if (!emailRegex.test(userEmail)) {
      alert("Email is not valid. Please enter a valid email address.");
      document.myForm.userEmail.focus();
      return false;
    }
  
    alert(userEmail + " Your email is valid");
    return true;
  }
  