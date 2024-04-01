// Importing HTML elements from index.html
const rightBtn = document.querySelector("#card_box .right_btn");
const leftBtn = document.querySelector("#card_box .left_btn");
const exploreIndia = document.querySelectorAll("#card_box .card_container");
// Quick and easy trip planner :
const easyLeft = document.querySelector("#card_box1 .left_btn");
const easyRight = document.querySelector("#card_box1 .explore_right_btn");
const easyCards = document.querySelectorAll("#card_box1 .card_container");
// unique properties
let uniqueCards = document.querySelectorAll("#card_box2 .card_container");
let uniqueLeft = document.querySelector("#card_box2 .unique_left_btn");
let uniqueRight = document.querySelector("#card_box2 .right_btn");

// Home guests love
let homeCards = document.querySelectorAll("#card_box3 .card_container");
let homeLeft = document.querySelector("#card_box3 .unique_left_btn");
let homeRight = document.querySelector("#card_box3 .right_btn");

// browse by property type
let browseCards = document.querySelectorAll("#card_box4 .card_container");
let browseLeft = document.querySelector("#card_box4 .unique_left_btn");
let browseRight = document.querySelector("#card_box4 .right_btn");

// Default values for any cards to move:
let currentCards = 0;
let easyCurrentCards = 0;
let uniqueCurrentCards = 0;
let homeCurrentCards = 0;
let browseCurrentCards = 0;

// Default function to create cards
leftBtn.style.display = "none";
easyLeft.style.display = "none";
uniqueLeft.style.display = "none";
homeLeft.style.display = "none";
browseLeft.style.display = "none";

// Default function to move the cards to next
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

// Default function to move the cards to previous
function prevCard(cardsToMove, rightButton, leftButton) {
  if (currentCards > 0) {
    currentCards--;
    moveCards(currentCards, cardsToMove);
  }

  if (currentCards === 0) {
    leftButton.style.display = "none";
  }

  if (currentCards < cardsToMove.length - 1) {
    rightButton.style.display = "inline";
  }
}

// Default function to move the cards
function moveCards(currentCards, cardsToMove) {
  cardsToMove.forEach((card, idx) => {
    card.style.transform = `translateX(${idx - currentCards * 110}%)`;
  });
}

//-------------------- Explore India Container to call the functions------------------------
rightBtn.addEventListener("click", function () {
  nextCard(exploreIndia, rightBtn, leftBtn);
});

leftBtn.addEventListener("click", function () {
  prevCard(exploreIndia, rightBtn, leftBtn);
});

moveCards(currentCards, exploreIndia);

//-------------------- Easy Trip Container to call the functions------------------------
easyLeft.addEventListener("click", function () {
  prevCard(easyCards, easyRight, easyLeft);
});

easyRight.addEventListener("click", function () {
  nextCard(easyCards, easyRight, easyLeft, easyCurrentCards);
});

moveCards(easyCurrentCards, easyCards);

//-------------------- Unique Properties Container to call the functions------------------------

uniqueLeft.addEventListener("click", function () {
  prevCard(uniqueCards, uniqueRight, uniqueLeft);
});

uniqueRight.addEventListener("click", function () {
  nextCard(uniqueCards, uniqueRight, uniqueLeft, uniqueCurrentCards);
});

moveCards(uniqueCurrentCards, uniqueCards);

//------------- Home Guest Container -----------------
homeLeft.addEventListener("click", function () {
  prevCard(homeCards, homeRight, homeLeft);
});

homeRight.addEventListener("click", function () {
  nextCard(homeCards, homeRight, homeLeft, uniqueCurrentCards);
});

moveCards(homeCurrentCards, homeCards);

// ------------- Browse by property type Container -----------------

browseLeft.addEventListener("click", function () {
  prevCard(browseCards, browseRight, browseLeft);
});

browseRight.addEventListener("click", function () {
  nextCard(browseCards, browseRight, browseLeft, browseCurrentCards);
});

moveCards(browseCurrentCards, browseCards);

// ----------------- Clickable Pages : ---------------

exploreIndia.forEach((card) => {
  card.addEventListener("click", function () {
    window.open("cardSign.html", "_blank");
  });
});
