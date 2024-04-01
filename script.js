// JavaScript to change text dynamically
var textOptions = ["homes", "hotels", "cottages", "villas", "apartment", "condo hotels"];
var currentIndex = 0;

function changeText() {
    currentIndex = (currentIndex + 1) % textOptions.length;
    document.getElementById("dynamic-text").textContent = textOptions[currentIndex];
}
setInterval(changeText, 2000);

