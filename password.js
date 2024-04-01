// Function to retrieve the user's email from sessionStorage
function getUserEmail() {
    return sessionStorage.getItem('userEmail');
}

// Function to display the user's email above the password input
function displayUserEmail() {
    var userEmail = getUserEmail();
    var emailHeading = document.getElementById('email-heading');
    var userEmailDisplay = document.getElementById('user-email');

    if (userEmail && emailHeading && userEmailDisplay) {
        // Set the text content of the email heading
        emailHeading.textContent = "Enter your password for " + userEmail;
    }
}

// Function to handle sign-in with password
function signIn() {
    var passwordInput = document.getElementById('password').value;
    
    // Check if the password field is empty
    if (!passwordInput.trim()) {
        alert("Please enter your password.");
        return; // Exit the function if the password field is empty
    }
    
    // You can implement your sign-in logic here
    // For demonstration, we'll just log the password to the console
    console.log("User entered password: " + passwordInput);
    
    // Redirect to the home page or update UI to show signed-in state
    window.location.href = 'index.html'; // Change 'index.html' to your actual home page
}

// Function to handle sign-in with a verification link
function signInWithLink() {
    // Implement sign-in with a verification link logic here
    // This can include sending an email/SMS with a verification link to the user
    alert("Sign in with a verification link");
}

// Call the displayUserEmail function when the page loads
window.onload = displayUserEmail;










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
  