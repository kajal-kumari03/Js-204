
    document.addEventListener("DOMContentLoaded", function () {
        
        var emailInput = document.querySelector('input[type="text"]');
        var subscribeButton = document.querySelector('.firButtons');

        subscribeButton.addEventListener('click', function () {
                    
            var email = emailInput.value;

            if (email.trim() !== '') {
                
                var thankYouMessage = document.createElement('p');
                thankYouMessage.textContent = 'Thank you for subscribing!';

                emailInput.parentNode.insertBefore(thankYouMessage, emailInput.nextSibling);

                emailInput.value = '';

                setTimeout(function () {
                    emailInput.style.display = 'none';
                    subscribeButton.style.display = 'none';
                    thankYouMessage.style.display = 'none';
                }, 1000);
            } else {
                
                alert('Please enter a valid email address.');
            }
        });
    });


    let yourAccount = document.getElementById("your_account");
    let yourAccount2 = document.getElementById("your_account2");

    yourAccount.addEventListener("click", function () {
        window.open("footer1.html", "_blank");
    })

    yourAccount2.addEventListener("click", function () {
        window.open("footer2.html", "_blank");
    })
