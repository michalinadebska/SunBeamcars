// Bind javascript to the html element with the id "form"
const filteringForm = document.getElementById("form");

const carslist = [
	{
		CarName: "Audi RS e-tron GT",
		Category: "coupé" ,
		Persons: 4,
		Suitcases: 3,
		Priceperday: 1643 , 
		Image: src="assets/car1.png" ,
		cssClass: "first",
	},
	{
		CarName: "Ford Mustang Match-E",
		Category: "SUV" ,
		Persons: 5,
		Suitcases: 4,
		Priceperday: 1643 , 
		Image: src="assets/car2.png" ,
		cssClass: "second",
	},
	{
		CarName: "BMW iX3",
		Category: "SUV" ,
		Persons: 5,
		Suitcases: 5,
		Priceperday: 1643 , 
		Image: src="assets/car3.png" ,
		cssClass: "third",
	},
];






// Event handler that is triggered when user clicks on submit button
filteringForm.addEventListener("submit", function (e) {
	e.preventDefault();

	// Bind javascript to the html element with the id "output"
	const carsSection = document.getElementById("cars");
	const numberInputField = document.getElementById("num-persons"); //numberInputField can be called const whatever = sth sth;
	const userInput = Number(numberInputField.value); // With Number() we are converting the string "5" into the number 5
	
	
	/*const suitcasesInputField = document.getElementById("num-suitcases");
	const suitcasesInput = Number(suitcasesInputField.value) */ //NOT NEEDED BECAUSE IT DOESNT WORK

	// Create an object list of elements with the class "cars" attached
	let outputString = "";
	for (const car of carslist) {

		if (car.Persons >= userInput) {
			// & car.Suitcases == suitcasesInput   DOESNT WORK
			const whatever = `<div class="${car.cssClass}-car">
            <img class="car-one-logo" id="car-one-logo" src="${car.Image}"/>
            <p class="car-name">${car.CarName}</p>
            <div>
            <p>Category: ${car.Category}</p>
            <p>Persons: ${car.Persons}</p>
            <p>Suitcases: ${car.Suitcases}</p>
            </div>
            <div>
            <p>Price: kr. ${car.Priceperday}</p>
            <button class="book-car-btn">Book Now</button>
            </div>
            </div>
            `;
			outputString = outputString + whatever;
		}
	}

	// Clear output area
	carsSection.innerHTML = outputString;
	// Setting output to nothing "
}); // Do not reload after submit button is pressed















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//date validation  
//IT REALLY USED TO WORK I PROMISE  :)))))   !!!!!!!!!!!!







//const numberInputField = parseFloat(document.getElementById("peopleinput").value);
//const suitcaseInput = parseFloat(document.getElementById("suitcaseinput").value);




/*function validDates(arrivaldate, departuredate) {
    const arrival = new Date(arrivaldate);
    const departure = new Date(departuredate);
    if (arrival > departure) {
        return false;
    } else {
        return true;
    }
}




const arrival = document.getElementById("arrivalfield");
const departure = document.getElementById("departurefield");
const output = document.getElementById("output");
const error = document.getElementById("error");

filteringForm.addEventListener("submit", function (event) {
    event.preventDefault();
    error.innerHTML = "";
    const datesValid = validDates(arrival.value, departure.value);
    if(datesValid) {




        // If true, price calculation must take place here

/*

function calculateDays(arrivaldate, departuredate){
    const arrival = new Date(arrivaldate);
    const departure = new Date(departuredate);
    const timediff = departure.getTime() - arrival.getTime();
    const diffindays = timediff / (1000 * 3600 * 24) + 1;
    return diffindays;
}

function calculatePrice(days) {
    const priceprday = 150;
    const totalprice = priceprday * days;
    return totalprice;
}







        //const days = calculateDays(arrival.value, departure.value);
       // const price = calculatePrice(days);

    } else {
        error.innerHTML = "The day of departure must be later than the day of arrival"
    }
})

*/