// function validateEmail() {
//     var emailInput = document.getElementById('email').value;
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
  
//     if (!emailPattern.test(emailInput)) {
//       document.getElementById('error-message').style.display = 'block';
//     } else {
//       document.getElementById('error-message').style.display = 'none';
//       // Proceed with further actions (e.g., form submission)
//     }
//   }
  


// function validateEmail() {
//     var emailInput = document.getElementById('email').value;
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

//     if (!emailPattern.test(emailInput)) {
//         document.getElementById('error-message').style.display = 'block';
//     } else {
//         document.getElementById('error-message').style.display = 'none';
//         // Store the email in localStorage
//         localStorage.setItem('userEmail', emailInput);
//         // Redirect to the home page or update UI to show signed-in state
//         window.location.href = 'password.html'; // Change 'home.html' to your actual home page
//     }
// }


function continueToPassword() {
  var emailInput = document.getElementById('email').value;
  // Store the email in sessionStorage
  sessionStorage.setItem('userEmail', emailInput);
  // Redirect to the password.html page
  window.location.href = 'password.html';
}

function validateEmail() {
  var emailInput = document.getElementById('email').value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
  if (!emailPattern.test(emailInput)) {
      document.getElementById('error-message').style.display = 'block';
  } else {
      document.getElementById('error-message').style.display = 'none';
      // Proceed with further actions (e.g., redirecting to the password.html page)
      continueToPassword();
  }
}

