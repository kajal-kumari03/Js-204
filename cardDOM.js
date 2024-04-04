import {
  exploreIndiaDestinations,
  quickTripDestinations,
  uniqueProperties,
  homeGuest,
  propertyType,
} from "./cardServer.js";

function createCards(cardTitle, cardDesc, destinations, container) {
  // ------- First Container ------------------
  let containerFirst = document.createElement("div");
  containerFirst.id = "explore_india_container_first";
  containerFirst.className = "container_first";

  let title = document.createElement("p");
  title.className = "title";
  title.innerText = cardTitle; // Change this to appropriate text

  let desc = document.createElement("p");
  desc.className = "desc";
  desc.innerText = cardDesc; // Change this to appropriate text
  containerFirst.append(title, desc);

  // Container for destinations
  let containerSecond = document.createElement("div");
  containerSecond.className = "container_second";

  destinations.forEach((destination) => {
    let cardContainer = document.createElement("div");
    cardContainer.className = "card_container";

    // ---------- Second Container --------------
    let imgContainer = document.createElement("div");
    imgContainer.className = "explore_india_img_container";

    let destinationImg = document.createElement("div");
    destinationImg.className = "destinations_img";

    let img = document.createElement("img");
    img.className = "destinations_img_class";
    img.src = destination.image;
    img.alt = destination.alt || destination.name;
    destinationImg.appendChild(img);

    let destinationDetails = document.createElement("div");
    destinationDetails.className = "destinations_details";

    let destinationName = document.createElement("p");
    destinationName.className = "destinations_name";
    destinationName.innerText = destination.name;

    if (
      destination.hasOwnProperty("distance") ||
      destination.hasOwnProperty("properties")
    ) {
      let destinationProperties = document.createElement("p");
      destinationProperties.className = "destinations_properties";
      destinationProperties.innerText =
        destination.distance || destination.properties;

      if (destination.reviews) {
        let destinationReviews = document.createElement("div");
        destinationReviews.className = "destination_reviews";

        let destinationReviewsStar = document.createElement("p");
        destinationReviewsStar.className = "destination_reviews_star";
        destinationReviewsStar.innerText = destination.reviews.star;

        let destinationRatingVerbal = document.createElement("p");
        destinationRatingVerbal.className = "destination_rating_verbal";
        destinationRatingVerbal.innerText = destination.reviews.verbal;

        let destinationRatingFeedback = document.createElement("p");
        destinationRatingFeedback.className = "destination_rating_feedback";
        destinationRatingFeedback.innerText = destination.reviews.feedback;

        let destinationReviewsStartingFrom = document.createElement("p");
        destinationReviewsStartingFrom.className =
          "destination_reviews_starting_from";
        destinationReviewsStartingFrom.innerText = `Starting from  ${destination.reviews.startingFrom}`;

        destinationReviews.append(
          destinationReviewsStar,
          destinationRatingVerbal,
          destinationRatingFeedback
        );
        destinationProperties.append(
          destinationReviews,
          destinationReviewsStartingFrom
        );
      }

      destinationDetails.append(destinationName, destinationProperties);
      imgContainer.append(destinationImg, destinationDetails);
      cardContainer.append(imgContainer);
      containerSecond.append(cardContainer);
    } else {
      destinationDetails.append(destinationName);
      imgContainer.append(destinationImg, destinationDetails);
      cardContainer.append(imgContainer);
      containerSecond.append(cardContainer);
      
    }
  });

  // Container for buttons
  let containerThird = document.createElement("div");
  containerThird.className = "container_third";

  // Unique class names for left and right buttons based on container
  let leftBtn = document.createElement("button");
  leftBtn.innerText = "<";
  leftBtn.className = "left_btn explore_left_btn unique_left_btn";

  let rightBtn = document.createElement("button");
  rightBtn.className = "right_btn explore_right_btn";
  rightBtn.style.fontSize = "1rem";
  rightBtn.innerText = ">";

  containerThird.append(leftBtn, rightBtn);
  container.append(containerFirst, containerSecond, containerThird);
}

createCards(
  "Explore India",
  "These popular destinations have a lot to offer",
  exploreIndiaDestinations,
  document.getElementById("card_box")
);

createCards(
  "Quick and easy trip planner",
  "Pick a vibe and explore the top destinations in India",
  quickTripDestinations,
  document.getElementById("card_box1")
);

createCards(
  "Stay at our top unique properties",
  "From castles and villas to boats and igloos, we've got it all",
  uniqueProperties,
  document.getElementById("card_box2")
);

createCards(
  "Home guests love",
  "",
  homeGuest,
  document.getElementById("card_box3")
);

createCards(
  "Browse by property type",
  "",
  propertyType,
  document.getElementById("card_box4")
);

//----------------------- Pratik cards DOM:--------------------

var cardsData = [
  {
    imageUrl:
      "images/cracker.jpeg",
    title: "5 of the best hotels in Los Angeles",
    text: "From Hollywood to Beverly Hills discover 5 of the best hotels in Los Angeles for your stay.",
  },
  {
    imageUrl:
      "https://cf.bstatic.com/xdata/images/xphoto/540x405/292056369.webp?k=358d8cd9ede268c8a9660de4debc48b68fe5777bddce07972ac30ae28ab8b8f2&o=2.jpg",
    title: "The 6 best Orlando hotels",
    text: "Discover the best Orlando hotels for families for your vacation.",
  },
  {
    imageUrl:
      "https://cf.bstatic.com/xdata/images/xphoto/540x405/288300879.webp?k=20a291605b4d1cc6c15b1ee3f9598c22ddb81a8d5ed73135330e426f8d2b9629&o=",
    title: "The 5 best ski towns ",
    text: "Discover the best Orlando hotels for families for your vacation.",
  },
];

function createThreeCard() {
  var cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";

  cardsData.forEach(function (cardData, index) {
    var card = document.createElement("div");
    card.className = "card";

    // If it's the first card, set its size to be double
    if (index === 0) {
      card.style.flex = "0 1 calc(2 * ((80% - 20px) / 3))";
    } else {
      card.classList.add("smaller-card"); // Add class for smaller cards
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

createThreeCard();



// -------------- Pratik second container -----------------------

const trendingDestination = [
  {
    name: "New Delhi",
    image: "https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
  },
  {
    name: "Bangalore",
    image: "https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
  },
  {
    name: "Mumbai",
    image: "https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
  },
  {
    name: "Chennai",
    image: "https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o="
  },
  {
    name: "Manali",
    image: "https://cf.bstatic.com/xdata/images/city/600x600/684716.jpg?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o="
  }
];

const container = document.getElementById("pratik");
trendingDestination.forEach((destination, index) => {
  const destinationDiv = document.createElement("div");
  destinationDiv.classList.add("destination");

  const image = document.createElement("img");
  image.src = destination.image;
  image.alt = destination.name;

  const span = document.createElement("span");
  span.textContent = destination.name;

  // Create Indian flag icon
  const flagIcon = document.createElement("i");
  flagIcon.classList.add("fas", "fa-flag", "flag-icon");

  destinationDiv.appendChild(image);
  destinationDiv.appendChild(span);
  destinationDiv.appendChild(flagIcon);
  container.appendChild(destinationDiv);

  if (index < 2) {
    destinationDiv.style.width = "calc(50% - 20px)";
  } else {
    destinationDiv.style.width = "calc(33.33% - 20px)";
  }
});
