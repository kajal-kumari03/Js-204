function validateEmail() {
    var emailInput = document.getElementById('email').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
  
    if (!emailPattern.test(emailInput)) {
      document.getElementById('error-message').style.display = 'block';
    } else {
      document.getElementById('error-message').style.display = 'none';
      // Proceed with further actions (e.g., form submission)
    }
  }
  