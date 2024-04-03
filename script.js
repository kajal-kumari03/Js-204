// JavaScript to change text dynamically
var textOptions = ["homes", "hotels", "cottages", "villas", "apartment", "condo hotels"];
var currentIndex = 0;
function changeText() {
    currentIndex = (currentIndex + 1) % textOptions.length;
    document.getElementById("dynamic-text").textContent = textOptions[currentIndex];
}
setInterval(changeText, 2000);

let signin=document.getElementById("signin-btn");
signin.addEventListener("click", function() {
        window.open("signin.html", "_blank");
      });

      let register=document.getElementById("register-btn");
      register.addEventListener("click", function() {
              window.open("signin.html", "_blank");
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
    const visibleCartsWidth = numVisibleCarts * cartWidth +1300;

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