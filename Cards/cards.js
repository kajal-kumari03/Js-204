// Array to hold data for each card
var cardsData = [
  {
    imageUrl:
      "https://xx.bstatic.com/xdata/images/xphoto/1182x887/292049433.jpg?k=c41b5f15ee5ddf57e32069ec056b1616642dcc7bae96d74ea7c1fd7d29036b69&o=?size=M",
    title: "5 of the best hotels in Los Angeles",
    text: "From Hollywood to Beverly Hills discover 5 of the best hotels.",
  },
  {
    imageUrl:
      "https://cf.bstatic.com/xdata/images/xphoto/540x405/292056369.webp?k=358d8cd9ede268c8a9660de4debc48b68fe5777bddce07972ac30ae28ab8b8f2&o=2.jpg",
    title: "The best Orlando hotels",
    text: "Discover the best Orlando hotels for families.",
  },
  {
    imageUrl:
      "https://cf.bstatic.com/xdata/images/xphoto/540x405/292056369.webp?k=358d8cd9ede268c8a9660de4debc48b68fe5777bddce07972ac30ae28ab8b8f2&o=3.jpg",
    title: "The best Orlando hotels",
    text: "Discover the best Orlando hotels for families.",
  },
];

// Function to create cards using the data from the array
function createCards() {
  var cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";

  // Loop through the cardsData array to create each card
  cardsData.forEach(function (cardData, index) {
    var card = document.createElement("div");
    card.className = "card";

    // If it's the first card, set its size to be double
    if (index === 0) {
      card.style.flex = "0 1 calc(2 * ((80% - 20px) / 3))";
    }

    // Create an image element and set its source
    var img = document.createElement("img");
    img.src = cardData.imageUrl;
    card.appendChild(img);

    // Add content to the card
    var cardContent = document.createElement("div");
    cardContent.className = "card-content";
    var title = document.createElement("h2");
    title.textContent = cardData.title;
    var text = document.createElement("p");
    text.textContent = cardData.text;
    cardContent.appendChild(title);
    cardContent.appendChild(text);
    card.appendChild(cardContent);

    cardsContainer.appendChild(card);
  });
}

// Call the function to generate the cards
createCards();
