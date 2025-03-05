// 0,21€ km
// 20% off under 18
// 40% off over 65

// price for km
const priceKm = 0.21;

// FORM
// form
const ticektForm = document.getElementById('ticket-form');
// name input
const userName = document.getElementById('name-input');
// km input
const userKm = document.getElementById('km-input');
// age input
const userAge = document.getElementById('age-input');
// button submit
const btnSub = document.getElementById('btn-submit');

// TICKET
// passenger name
const nameArea = document.getElementById('name-area');
// discount amount
const discArea = document.getElementById('discount-area');
// train carriage number
const carriageArea = document.getElementById('carriage-area');
// cp code
const cpArea = document.getElementById('cp-area');
// final ticket price
const priceArea = document.getElementById('price-area');

// action when click on button submit
ticektForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const userKmInt = parseInt(userKm.value)
    console.log(userKmInt);
    console.log(userAge.value);

    // inzialize variable for discount
    let ticketDiscount = 0;
    // inzialize variable for name discount
    let nameDiscount = 'Standard Ticket';

    // calculate price ticket without discount
    const basePrice = userKmInt * priceKm;
    console.log(`Base Price: ${basePrice}`);

    if (userAge.value === 'under18') {
        // 20% off 
        ticketDiscount = 20;
        nameDiscount = 'Youth Ticket';
    }   
    else if (userAge.value === 'over65'){
        // 40% off
        ticketDiscount = 40;
        nameDiscount = 'Senior Ticket';
    }

    // Print on CONSOLE

    // print discount amount
    console.log(`Your ticket is: ${nameDiscount}`);

    // calculate discount
    const calcDiscount = (basePrice * ticketDiscount) / 100;
    console.log(`Calculation of discount: ${calcDiscount}`);

    // calculate ticket price with discount
    let ticketPrice = basePrice - calcDiscount;
    ticketPrice = ticketPrice.toFixed(2);
    console.log(`Ticket price is: ${ticketPrice}`);

    // Print on PAGE

    //output passenger name
    nameArea.innerText = userName.value;

    // output discount
    discArea.innerText = nameDiscount;

    //output train carriage number
    const carriageNum = Math.ceil(Math.random() * 10);
    carriageArea.innerText = carriageNum;

    //output cp code
    const cpCode = Math.floor(Math.random() * 10000) + 90000;
    cpArea.innerText = cpCode;

    // output price
    priceArea.innerText = `${ticketPrice}€`;
});