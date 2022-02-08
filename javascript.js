const carlist = [
    {
        modelName:"Tesla Model X",
        people:"4",
        suitcases:"1",
        category:"Budget",
        comfort:"Low",
        price:"850,00",
        image: "images/budget.png"
    },
    {
        modelName:"BMW i8",
        people:"5",
        suitcases:"3",
        category:"Standard",
        comfort:"Medium",
        price:"1170,00",
        image: "images/car-main.png"
    },
    {
        modelName:" Tesla Cybertruck",
        people:"7",
        suitcases:"4",
        category:"Minivan",
        comfort:"High",
        price:"1420,00",
        image: "images/minivan.png"
    }
    
];


// Make an output template for the member information
// and CSS styling references. I need to use "let" and
// not "const" since the template will change for 
// each member
    

const arrival = document.getElementById("arrivalfield");
const departure = document.getElementById("departurefield");

const form = document.getElementById("form");

const error = document.getElementById("error");


//FILTERING
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const peopleInput = parseFloat(document.getElementById("peoplefield").value);
    const suitcaseInput = parseFloat(document.getElementById("suitcasefield").value);
    const output = document.getElementById("output");

    let carOutput = "";
    for (const car of carlist) {
    
        if  (peopleInput <= car.people & suitcaseInput <= car.suitcases ) {
         const carTemp = `<div class="cards">
                <div>
                    <img src="${car.image}" alt="budget-car">
                </div>
                <h2>${car.modelName}</h2>
                <div>
                    <p>Category: ${car.category}</p>
                    <p>People: ${car.people}</p>
                    <p> Suitcases: ${car.suitcases}</p>
                    <p>Comfort: ${car.comfort}</p>
                </div>
                <div class="price-box">
                    <p>${car.price} DKK</p>
                    <button>Book Now</button>
                </div>
            </div>`;
            carOutput = carOutput + carTemp;
    }
}

    output.innerHTML = carOutput;
});

