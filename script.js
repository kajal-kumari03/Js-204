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




document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cartWidth = document.querySelector('.cart').offsetWidth;
    const numCarts = slider.children.length;
    const frameWidth = document.querySelector('.slider-frame').offsetWidth;
    let currentPosition = 0;
  
    const numVisibleCarts = 2; // Number of carts visible at a time
    const visibleCartsWidth = numVisibleCarts * cartWidth +100;
  
    prevBtn.addEventListener('click', function() {
      currentPosition += cartWidth;
      currentPosition = Math.min(currentPosition, 0);
      slider.style.transform = `translateX(${currentPosition}px)`;
    });
  
    nextBtn.addEventListener('click', function() {
      currentPosition -= cartWidth;
      const maxPosition = -(numCarts - numVisibleCarts) * cartWidth;
      currentPosition = Math.max(currentPosition, maxPosition);
      slider.style.transform = `translateX(${currentPosition}px)`;
    });
  });
  
