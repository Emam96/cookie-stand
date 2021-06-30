"use strict";

let workHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];

let dashboardArray = [];
let locations = [];
const reducer = (accumulator, curr) => accumulator + curr;




//////////////////////////////////////////////////////////////// divs 
let containerEl = document.getElementById("container");
let tableEl = document.createElement("table");
containerEl.appendChild(tableEl);
let trel = document.createElement("tr");
tableEl.appendChild(trel);

let containerEl2 = document.getElementById("foot");
let tableEl2 = document.createElement("table");
containerEl2.appendChild(tableEl2);
let trel2 = document.createElement("tr");
tableEl2.appendChild(trel2);






/////////////////////////////////////////////////////////////// header function

let header = function () {
  for (let i = 0; i < workHours.length; i++) {
    let thel = document.createElement("th");
    thel.textContent = workHours[i];

    trel.appendChild(thel);
  }
};




//////////////////////////////////////////////////////////////////////// main (object constructor)
function Location(name, cookieNumber, min, max, hourlysales) {
  this.name = name;
  this.avgCokiePerCst = cookieNumber;
  this.min = min;
  this.max = max;
  this.hourlySaleTwo = hourlysales;

  locations.push(this);
}

Location.prototype.getAvgCst = function (min, max) {
  this.avgCst = Math.floor(Math.random() * (max - min + 1) + min);
};

Location.prototype.getHourlySales = function () {
  this.hourlySales = Math.floor(this.avgCst * this.avgCokiePerCst);
};

Location.prototype.render = function () {
  let tr2el = document.createElement("tr");

  let shopNameCol = document.createElement("th");
  shopNameCol.textContent = this.name;
  tr2el.appendChild(shopNameCol);

  for (let i = 0; i < workHours.length; i++) {
    this.getAvgCst(23, 65);
    this.getHourlySales();
    this.hourlySaleTwo.push(this.hourlySales);

    let th2el = document.createElement("th");
    th2el.textContent = this.hourlySaleTwo[i];
    tr2el.appendChild(th2el);
  }
  containerEl.appendChild(tr2el);

  let result = document.createElement("th");
  result.textContent = `Total ${this.hourlySaleTwo.reduce(reducer)}`;
  tr2el.appendChild(result);
  tableEl.appendChild(tr2el);
};
//////////////////////////////////////////////////////////////////// footer function
let footer = function () {
  let thel2 = document.createElement("th");
  thel2.textContent = "Gross sales";

  trel2.appendChild(thel2);

  for (let roundone = 0; roundone < workHours.length; roundone++) {
    // this round is to create the cells needed to fill the totals
    let dash = document.createElement("th");

    trel2.appendChild(dash);
    let dashboard = 0;

    for (let roundtwo = 0; roundtwo < locations.length; roundtwo++) {
      // this round adds up the first cell in the row from each location
      dashboard = dashboard + locations[roundtwo].hourlySaleTwo[roundone];
      dash.textContent = `Total ${dashboard}`;
    }
    dashboardArray.push(dashboard);
  }

  let thel3 = document.createElement("th");
  trel2.appendChild(thel3);
  thel3.textContent = `Total ${dashboardArray.reduce(reducer)}`;
};

//////////////////////////////////////////////////////////////////////// declarations
let Tokyo = new Location("Tokyo shop", 6.3, 23, 65, []);
let Seattle = new Location("Seattle shop", 1.2, 3, 24, []);
let Dubai = new Location("Dubai shop", 3.7, 11, 38, []);
let Paris = new Location("Paris shop", 2.3, 20, 38, []);
let Lima = new Location("Lima shop", 4.6, 2, 16, []);


header();
Seattle.getAvgCst();
Tokyo.getAvgCst();
Dubai.getAvgCst();
Paris.getAvgCst();
Lima.getAvgCst();

Seattle.getHourlySales();
Tokyo.getHourlySales();
Dubai.getHourlySales();
Paris.getHourlySales();
Lima.getHourlySales();




Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();



/////////////////////////////////////////////////////////////////// event handler
let app = document.getElementById("application");


function addLocation(event) {
  
  event.preventDefault();

  let locationName = event.target.Name.value;
  let Avg = event.target.Average.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let rick = [];

  let newLocation = new Location(locationName, Avg, min, max, rick);
 
  
  
  
  newLocation.getAvgCst();
  
  newLocation.getHourlySales();
  
  
  
  
  newLocation.render();
  trel2.innerHTML = '';    // this one here, clears the total row and refresh it with every new input from the user, took a long time to make this.
  footer();

}



footer();



app.addEventListener("submit", addLocation);