/*const output = document.getElementById("output");


//date validation

const arrival = document.getElementById("arrivalfield");
const departure = document.getElementById("departurefield");

//const numberInputField = parseFloat(document.getElementById("peopleinput").value);
//const suitcaseInput = parseFloat(document.getElementById("suitcaseinput").value);


const error = document.getElementById("error");

function validDates(arrivalfield, departurefield) {
    const arrival = new Date(arrivalfield);
    const departure = new Date(departurefield);
    if (arrival > departure) {
        return false;
    } else { 
        return true;
    }
}

/*

function calculateDays (arrivalfield , departurefield){

    const timediff = departure.getTime() - arrivaldate.getTime();
    const diffindays = timediff / (1000 * 3600 * 24) + 1;
    return diffindays
}

function calcRentalDays(days){
    const pricePerDay = 100;
    const totalPrice = pricePerDay * days;
    return totalPrice
}

*/

