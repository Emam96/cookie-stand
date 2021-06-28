'use strict';

let workHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];


// for (let i = 0; i < workHours.length; i++) {
  
//   let grossSalesColumn = grossSalesColumnArray[i] = [];

//   console.log(grossSalesColumn);
// };




const reducer = (accumulator, curr) => accumulator + curr;


let containerEl = document.getElementById('container');
let tableEl = document.createElement('table');
containerEl.appendChild(tableEl);
let trel = document.createElement('tr');
tableEl.appendChild(trel);

let tabel1 = function () {
  for (let i = 0; i < workHours.length; i++) {
    let thel = document.createElement('th');
    thel.textContent = workHours[i];

    trel.appendChild(thel);
  }
};

tabel1();



let locations = [];



function Location(name, cookieNumber, min, max, hourlysales,) {
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
  let tr2el = document.createElement('tr');

  let shopNameCol = document.createElement('th');
  shopNameCol.textContent = this.name;
  tr2el.appendChild(shopNameCol);

  for (let i = 0; i < workHours.length; i++) {
    this.getAvgCst(23, 65);
    this.getHourlySales();
    this.hourlySaleTwo.push(this.hourlySales);

    let th2el = document.createElement('th');
    th2el.textContent = this.hourlySaleTwo[i];
    tr2el.appendChild(th2el);
  }
  containerEl.appendChild(tr2el);
  

  let result = document.createElement('th');
  result.textContent = `Total ${this.hourlySaleTwo.reduce(reducer)}`;
  tr2el.appendChild(result);
  tableEl.appendChild(tr2el);

};

let Tokyo = new Location('Tokyo shop', 6.3, 23, 65, []);
let Seattle = new Location('Seattle shop', 1.2, 3, 24, []);
let Dubai = new Location('Dubai shop', 3.7, 11, 38, []);
let Paris = new Location('Paris shop', 2.3, 20, 38, []);
let Lima = new Location('Lima shop', 4.6, 2, 16, []);

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



let trel4 = document.createElement('tr');
  tableEl.appendChild(trel4);
  let thel2 = document.createElement('th');
  thel2.textContent = 'Gross sales';
  trel4.appendChild(thel2);
for (let roundone = 0; roundone < workHours.length; roundone++) {                       // this round is to create the cells needed to fill the totals 
  let dash = document.createElement("th");
  trel4.appendChild(dash);
  let dashboard = 0;
  for (let roundtwo = 0; roundtwo < locations.length; roundtwo++) {                     // this round adds up the first cell in the row from each location
    dashboard = dashboard + locations[roundtwo].hourlySaleTwo[roundone];
    dash.textContent = `Total ${dashboard}`;
  }
}
