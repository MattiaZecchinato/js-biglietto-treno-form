// 0,21€ km
// 20% off under 18
// 40% off over 65

// price for km
const priceKm = 0.21;

// FORM
// km input
const userKm = document.getElementById('km-input');
// age input
const userAge = document.getElementById('age-input');
// button submit
const btnSub = document.getElementById('btn-submit');

// TICKET
const discArea = document.getElementById('discount-area');
const priceArea = document.getElementById('price-area');

// action when click on button submit
btnSub.addEventListener('click', function() {

    const userKmInt = parseInt(userKm.value)
    const userAgeInt = parseInt(userAge.value)
    console.log(userKmInt);
    console.log(userAgeInt);

    // inzialize variable for discount
    let ticketDiscount = 0;

    // calculate price ticket without discount
    const basePrice = userKmInt * priceKm;
    console.log(`Base Price: ${basePrice}`);

    if (userAgeInt < 18) {
        // 20% off 
        ticketDiscount = 20;
    }   
    else if (userAgeInt >= 65){
        // 40% off
        ticketDiscount = 40;
    }

    // Print on CONSOLE

    // print discount amount
    console.log(`Your discount is: ${ticketDiscount}%`);

    // calculate discount
    const calcDiscount = (basePrice * ticketDiscount) / 100;
    console.log(`Calculation of discount: ${calcDiscount}`);

    // calculate ticket price with discount
    let ticketPrice = basePrice - calcDiscount;
    ticketPrice = ticketPrice.toFixed(2);
    console.log(`Ticket price is: ${ticketPrice}`);

    // Print on PAGE
    discArea.innerText = `${ticketDiscount}%`;
    priceArea.innerText = `${ticketPrice}€`;
});