// Retrieve the email entered by the user from sessionStorage
var userEmail = sessionStorage.getItem('userEmail');

// Function to display the user's email above the password input
function displayUserEmail() {
    var emailHeading = document.getElementById('email-heading');
    var userEmailDisplay = document.getElementById('user-email');

    if (userEmail && emailHeading && userEmailDisplay) {
        // Set the text content of the email heading
        emailHeading.textContent = "Enter your password for";
        // Set the text content of the user email display div
        userEmailDisplay.textContent = userEmail;
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
