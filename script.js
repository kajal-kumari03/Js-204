// JavaScript to change text dynamically
var textOptions = ["homes", "hotels", "cottages", "villas", "apartment", "condo hotels"];
var currentIndex = 0;

function changeText() {
    currentIndex = (currentIndex + 1) % textOptions.length;
    document.getElementById("dynamic-text").textContent = textOptions[currentIndex];
}
setInterval(changeText, 2000);


document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is signed in
    var userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        // User is signed in, update UI accordingly
        document.getElementById('user-welcome').innerText = 'Welcome, ' + userEmail;
    } else {
        // User is not signed in, handle accordingly
        // For example, redirect to sign-in page
        window.location.href = 'signin.html'; // Change 'signin.html' to your sign-in page
    }
});

