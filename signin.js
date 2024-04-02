function continueToPassword() {
  var emailInput = document.getElementById('email').value.trim(); // Trim whitespace from input
  
  // Check if the email field is empty
  if (!emailInput) {
    alert("Please enter your email address.");
    return; // Exit the function if the email field is empty
  }
  
  // Store the email in sessionStorage
  sessionStorage.setItem('userEmail', emailInput);
  
  // Redirect to the password.html page
  window.location.href = 'password.html';
}

function validateEmail() {
  var emailInput = document.getElementById('email').value.trim(); // Trim whitespace from input
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
  
  if (!emailPattern.test(emailInput)) {
    document.getElementById('error-message').style.display = 'block';
    return; // Exit the function if email format is incorrect
  } else {
    document.getElementById('error-message').style.display = 'none';
    // Proceed to the password page only if the email is valid
    continueToPassword();
  }
}



function validateEmailAndContinue() {
  var isValidEmail = validateEmail();
  if (isValidEmail) {
    continueToPassword();
  } else {
      // Display error message or handle invalid email condition as needed
      console.log("Invalid email address");
  }
}






// Function to toggle the toggle popup
function toggleLanguageTogglePopup() {
  const languageTogglePopup = document.getElementById('languageTogglePopup');
  languageTogglePopup.style.display = languageTogglePopup.style.display === 'none' ? 'block' : 'none';
}

// Function to handle language selection
function handleLanguageSelection() {
  const selectedLanguage = this.value;
  const languageSelectionButton = document.getElementById('languageSelectionButton');
  languageSelectionButton.innerText = selectedLanguage;
  // Remove selected class from all labels
  document.querySelectorAll('.language-toggle-popup label').forEach(label => {
    label.classList.remove('language-selected');
  });
  // Add selected class to the clicked label
  this.parentNode.classList.add('language-selected');
  toggleLanguageTogglePopup(); // Close the toggle popup after selection
}

// Get all language radio buttons
const languageRadioButtons = document.querySelectorAll('input[name="language"]');

// Add event listener to each language radio button
languageRadioButtons.forEach(button => {
  button.addEventListener('click', handleLanguageSelection);
});

// Event listener for the language button
document.getElementById('languageSelectionButton').addEventListener('click', toggleLanguageTogglePopup);
