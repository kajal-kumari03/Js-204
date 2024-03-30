// ---------------Import HTML elements form index.html-----------------

let rightSideBtn = document.querySelector(".right_side_btn");
let leftSideBtn = document.querySelector(".left_side_btn");
let exploreIndiaImg = document.querySelectorAll(".explore_india_img_container");
let currentCards = 0;

// ---------------Function to move the cards to next-----------------
leftSideBtn.style.display = "none";

function nextCard() {
  if (currentCards < exploreIndiaImg.length - 6) {
    currentCards++;
    leftSideBtn.style.display = "inline";
    moveCards(currentCards);
  }

  if (currentCards === exploreIndiaImg.length - 6) {
    rightSideBtn.style.display = "none";
  }
}

// ------------Function to move the cards to previous-----------------
function prevCard() {
  if (currentCards > 0) {
    currentCards--;
    moveCards(currentCards);
  }

  if (currentCards === 0) {
    leftSideBtn.style.display = "none";
  }

  if (currentCards < exploreIndiaImg.length - 6) {
    rightSideBtn.style.display = "inline";
  }
}

// ---------------Function to move the cards-----------------
function moveCards(currentCards) {
  exploreIndiaImg.forEach((card, idx) => {
    card.style.transform = `translateX(${idx - currentCards * 110}%)`;
  });
}

// ---------------Event Listeners-----------------
moveCards(currentCards);
rightSideBtn.addEventListener("click", nextCard);
leftSideBtn.addEventListener("click", prevCard);
