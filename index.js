// ---------------Import HTML elements form index.html-----------------
let rightSideBtn = document.querySelector(".right_side_btn");
let leftSideBtn = document.querySelector(".left_side_btn");
let exploreIndiaImg = document.querySelectorAll(".explore_india_img_container");
// easy and trip Planner
let rightBtn = document.querySelector(".right_btn");
let leftBtn = document.querySelector(".left_btn");
const easyTrip = document.querySelectorAll(".easy_trip_img_container");

// default values for any cards to move:
let currentCards = 0;
leftSideBtn.style.display = "none";

// ---------------Default Function to move the cards to next-----------------

function nextCard(cardsToMove, rightButton, leftButton) {
  if (currentCards < cardsToMove.length - 6) {
    currentCards++;
    leftButton.style.display = "inline";
    moveCards(currentCards, cardsToMove);
  }

  if (currentCards === cardsToMove.length - 6) {
    rightButton.style.display = "none";
  }
}

// ------------Default Function to move the cards to previous-----------------
function prevCard(cardsToMove, rightButton, leftButton) {
  if (currentCards > 0) {
    currentCards--;
    moveCards(currentCards, cardsToMove);
  }

  if (currentCards === 0) {
    leftButton.style.display = "none";
  }

  if (currentCards < cardsToMove.length - 6) {
    rightButton.style.display = "inline";
  }
}

// ---------------Defalut Function to move the cards-----------------
function moveCards(currentCards, cardsToMove) {
  cardsToMove.forEach((card, idx) => {
    card.style.transform = `translateX(${idx - currentCards * 110}%)`;
  });
}

//--------------------------- Function to call and execute the various functions to move the cards-------------------------:

// ---------Explore India Container to call the functions: --------------
function exploreIndiaLeft() {
  nextCard(exploreIndiaImg, rightSideBtn, leftSideBtn);
}
function exploreIndiaRight() {
  prevCard(exploreIndiaImg, rightSideBtn, leftSideBtn);
}

moveCards(currentCards, exploreIndiaImg);

//----------- Quick and easy Trip to call the functions: --------------
function quickEasyRight() {
  nextCard(easyTrip, rightBtn, leftBtn);
}

function quickEasyLeft() {
  prevCard(easyTrip, rightBtn, leftBtn);
}

// ---------------Event Listeners-----------------
// Explore India
rightSideBtn.addEventListener("click", exploreIndiaLeft);
leftSideBtn.addEventListener("click", exploreIndiaRight);
// Quick and Easy
rightBtn.addEventListener("click", quickEasyRight);
leftBtn.addEventListener("click", quickEasyLeft);
