const exploreIndiaDestinations = [
  { name: "Goa", properties: "5,260 properties", image: "images/goa.jpg" },
  { name: "New Delhi", properties: "2,917 properties", image: "images/newdelhi.jpg" },
  { name: "North Goa", properties: "3,916 properties", image: "images/northgoa.jpg" },
  { name: "Mumbai", properties: "1,656 properties", image: "images/mumbai.jpg" },
  { name: "Jaipur", properties: "1,559 properties", image: "images/jaipur.jpg" },
  { name: "Rishikesh", properties: "477 properties", image: "images/rishikesh.jpg" },
  { name: "Bangalore", properties: "2,049 properties", image: "images/bangalore.jpg" },
  { name: "Ooty", properties: "470 properties", image: "images/ooty.jpg" },
  { name: "South Goa", properties: "1,375 properties", image: "images/southgoa.jpg" },
  { name: "Lonavala", properties: "751 properties", image: "images/lonavala.jpg" },
];

const quickTripDestinations = [
  { name: "Dehradun", distance: "202 km away", image: "images/deharadun.jpg" },
  { name: "Ram Nagar", distance: "202 km away", image: "images/ramnagar.jpg" },
  { name: "Gargia", distance: "208 km away", image: "images/garjia.jpg" },
  { name: "Mussoorie", distance: "216 km away", image: "images/mussoorie.jpg" },
  { name: "Kasuali", distance: "251 km away", image: "images/kasuali.jpg" },
  { name: "Shimla", distance: "272 km away", image: "images/shimla.jpg" },
  { name: "Kasol", distance: "373 km away", image: "images/kasal.jpg" },
  { name: "Manali", distance: "399 km away", image: "images/manali.jpg" },
  { name: "DalHousie", distance: "448 km away", image: "images/dalhousie.jpg" },
  { name: "McLeod Ganj", distance: "409 km away", image: "images/mcleodganj.jpg" },
];

const uniqueProperties = [
  { name: "Gyttja Vastergards", distance: "Germany", image: "images/germany.webp", reviews:{star: "9.4", verbal: "Superb", feedback: "10350 review", startingFrom:"10,133"}},
  { name: "Waldschenke", distance: "Finland", image: "images/finland.webp" , reviews:{star: "9.4", verbal: "Superb", feedback: "10350 review", startingFrom:"10,133"}},
  { name: "Harbor View", distance: "United Kingdom", image: "images/usa.webp", rating: "Exceptional", reviews:{star: "9.4", verbal: "Superb", feedback: "10350 review", startingFrom:"10,133"} },
  { name: "Casa Rural Cunsan", distance: "Spain", image: "images/spain.webp" , rating : "Superb"},
  { name: "Donki Rosse plazye", distance: "Poland", image: "images/poland.webp", rating: "Exceptional" },
  { name: "Casa Prisco", distance: "Neitherland", image: "images/netherland.webp", rating:"Superb" },
  { name: "Da-rot House", distance: "Germany", image: "images/germany.webp", rating: "Superb" },
  { name: "Tiny House", distance: "Brazil", image: "images/brazil.webp", rating: "Exceptional" },
  { name: "Carniya Park", distance: "Australia", image: "images/australia.webp", rating: "Superb" },
  { name: "Raczo Wdolinie", distance: "Poland", image: "images/poland.webp", rating: "Superb" },
];

const homeGuest = [
  {name: "Aparthotel Stare Miasto", distance: "Old Town, Poland", image: "images/aparthotel.webp", reviews:{star: "8.7", verbal: "Good", feedback: "73 reviews",startingFrom: "10,133"}},
  {name: "7Seasons Appartments", distance: "06, Terezvarous, Hungary", image: "images/seven.webp", reviews:{star: "8.8", verbal: "Fabolous", feedback: "10660 reviews", startingFrom: "11,243"}},
  {name: "Leman Locke", distance: "Tower Hamlets, United Kingdom", image: "images/leman.webp", reviews:{star: "8.8", verbal: "Fabolous", feedback: "1279 reviews", startingFrom: "10,243"}},
  {name: "Cheval Three Quays Appartments", distance: "City of London, United Kingdom", image: "images/cheval.webp", reviews:{star: "9.4", verbal: "Suberb", feedback: "691 reviews", startingFrom: "10,743"}},
  {name: "The Apartments by Sloane Club", distance: "kensigton and Cheisea, United Kingdom", image: "images/apartment.webp", reviews:{star: "9.0", verbal: "Suberb", feedback: "203 reviews", startingFrom: "15,293"}},
  {name: "Casa Portuguesa Prata", distance: "Santa Maria Maior, Portugal", image: "images/casa.webp", reviews:{star: "7.7", verbal: "Good", feedback: "73 reviews",startingFrom: "14,999"}},
  {name: "Flora Chiado Apartments", distance: "Santa Maria Maior, Portugal", image: "images/flora.webp", reviews:{star: "9.7", verbal: "Exceptional", feedback: "196 reviews", startingFrom: "15,893"}},
  {name: "VIP Residence Budapest", distance: "05, Belvaros-Lipovrous, Hungary", image: "images/vip.webp", reviews:{star: "9.7", verbal: "Exceptional", feedback: "32 reviews", startingFrom: "11,249"}},
  {name: "Sugar Loft Apartments", distance: "Santa Teresa, Brazil", image: "images/sugar.webp", reviews:{star: "8.7", verbal: "Fabolous", feedback: "369 reviews", startingFrom : "13,243"}},
]

const propertyType = [
  {name: "Glamping Sites", image: "images/glamping.jpeg"},
  {name: "Serviced Apartments", image: "images/apartments.jpeg"},
  {name: "Holiday Homes", image: "images/holiday.jpeg"},
  {name: "Guest Houses", image: "images/guest.jpeg"},
  {name: "Hostels", image: "images/hotels.jpeg"},
  {name: "Resorts", image: "images/resort.jpeg"},
  {name: "Apartments", image: "images/apartment.webp"},
  {name: "Villas", image: "images/villas.jpeg"},
  {name: "Cabins", image: "images/cabins.jpeg"},
  {name: "Cottages", image: "images/cottages.jpeg"},
]



export { exploreIndiaDestinations, quickTripDestinations, uniqueProperties, homeGuest,propertyType };
