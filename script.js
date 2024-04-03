    document.addEventListener("DOMContentLoaded", function() {
 var message = document.getElementById("message");


 function checkFields() {
   var location = document.getElementById("location").value;
   var checkIn = document.getElementById("check-in").value;
   var checkOut = document.getElementById("check-out").value;
   var guests = document.getElementById("guests").value;

   if (!location || !checkIn || !checkOut || !guests === "0") {
     message.textContent = "Please fill out all required fields: location, check-in date, check-out date, and number of guests.";
     message.style.display = "block";
     return false;
   }

   message.style.display = "none"; 
   return true;
 }

 document.getElementById("button").addEventListener("click", function() {
   if (checkFields()) {
  
   
   }
 });
});



    const currencyButton = document.getElementById('currencyButton');
    const togglePopup = document.getElementById('togglePopup');
  
   
    function toggleTogglePopup() {
      togglePopup.style.display = togglePopup.style.display === 'none' ? 'block' : 'none';
    }
  
    // Function to handle currency selection
    function handleCurrencySelection() {
      const selectedCurrency = this.value;
      currencyButton.innerText = selectedCurrency;
      // Remove selected class from all labels
      document.querySelectorAll('.toggle-popup label').forEach(label => {
        label.classList.remove('selected');
      });
      // Add selected class to the clicked label
      this.parentNode.classList.add('selected');
      toggleTogglePopup(); // Close the toggle popup after selection
    }
  
    // Get all currency radio buttons
    const currencyRadioButtons = document.querySelectorAll('input[name="currency"]');
  
    // Add event listener to each currency radio button
    currencyRadioButtons.forEach(button => {
      button.addEventListener('click', handleCurrencySelection);
    });
  
    // Event listener for the currency button
    currencyButton.addEventListener('click', toggleTogglePopup);


    // Get the button and toggle popup elements
  const languageSelectionButton = document.getElementById('languageSelectionButton');
  const languageTogglePopup = document.getElementById('languageTogglePopup');

  // Function to toggle the toggle popup
  function toggleLanguageTogglePopup() {
    languageTogglePopup.style.display = languageTogglePopup.style.display === 'none' ? 'block' : 'none';
  }

  // Function to handle language selection
  function handleLanguageSelection() {
    const selectedLanguage = this.value;
    languageSelectionButton.innerText = selectedLanguage;
    // Remove selected class from all labels
    document.querySelectorAll('.language-toggle-popup label').forEach(label => {
      label.classList.remove('language-selected');
    });
    // Add selected class to the clicked label
    this.parentNode.classList.add('language-selected');
    toggleLanguageTogglePopup(); // Close the toggle popup after selection
  }

  // Get all language radio buttons
  const languageRadioButtons = document.querySelectorAll('input[name="language"]');

  // Add event listener to each language radio button
  languageRadioButtons.forEach(button => {
    button.addEventListener('click', handleLanguageSelection);
  });

  // Event listener for the language button
  languageSelectionButton.addEventListener('click', toggleLanguageTogglePopup);




  

