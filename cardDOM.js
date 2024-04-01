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




//----------------------- clickable page to move further:--------------------

