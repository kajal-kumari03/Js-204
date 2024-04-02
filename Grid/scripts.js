// Data for destinations
const destinations = [
  {
    name: "New Delhi",
    image:
      "https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
  },
  {
    name: "Bangalore",
    image:
      "https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=",
  },
  {
    name: "Mumbai",
    image:
      "https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",
  },
  {
    name: "Chennai",
    image:
      "https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=",
  },
  {
    name: "Manali",
    image:
      "https://cf.bstatic.com/xdata/images/city/600x600/684716.jpg?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o=",
  },
];

// Create destination elements
const container = document.getElementById("container");
destinations.forEach((destination, index) => {
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

  // Append elements
  destinationDiv.appendChild(image);
  destinationDiv.appendChild(span);
  destinationDiv.appendChild(flagIcon);
  container.appendChild(destinationDiv);

  // Adjust layout for the first two destinations
  if (index < 2) {
    destinationDiv.style.width = "calc(50% - 20px)";
  } else {
    // Adjust width for the remaining destinations to fit in the second row
    destinationDiv.style.width = "calc(33.33% - 20px)";
  }
});
