function validateName(name) {
  var letters = /^[A-Za-z]+$/;
  if (!name.match(letters)) {
      alert("Name must contain only alphabets.");
      return false;
  }
  return true;  
}

function validateOwner(owner) {
  var letter = /^[A-Za-z]+$/;
  if (!owner.match(letter)) {
      alert("Owner name must contain only alphabets.");
      return false;
  }
  return true;
}

function validateEmail(mail) {
  var mailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!mail.match(mailpattern)) {
      alert("Invalid email address.");
      return false;
  }
  return true;
}

function validatePassword(password) {
  if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
  }
  return true;
}



function subform(){
  var name = document.getElementById('Name').value;
  var owner = document.getElementById('owner').value;
  var mail = document.getElementById('mail').value;
  var password = document.getElementById('password').value;

  // Check if any of the fields are empty
  if (name === "" || owner === "" || mail === "" || password === "") {
      alert("Please fill in all fields.");
      return; // Prevent form submission
  }

  // Now, proceed with the validation
  if(validateName(name) && validateOwner(owner) && validateEmail(mail) && validatePassword(password)){
    alert("Form submitted successfully");
  }
}