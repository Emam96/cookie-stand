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
  "8pm"
];

  

let total = function (array)
{ let  totalOne = 0;
    for (let i = 0; i < array.length;  i=+ i+2) {
    //   console.log(`inloop ${i} i + 2 is ${i + 2}`)
    for (let i = 0; i < array.length;  i=+ i+2) {
        if (isNaN(array[i + 2])) { 
      
        totalOne = totalOne + array[1];

        
     }
     
     else {
        totalOne = totalOne + array[1]+ array[i + 1];
     }
     
    //  console.log(`inloop ${i} totalone was ${totalOne}`)
        
    }

    return totalOne;            
    
}
  
} 

let Seattle = {
    
    name: "Seattle shop",

    minCst: 23,

    maxCst: 65,

    avgCst: 0,

    hourlySales: 0,

    avgCokiePerCst: 6.3,

     hourlySaleTwo: [],

    getAvgCst: function (min, max) {
      this.avgCst = Math.floor(Math.random() * (max - min + 1) + min);
    },

    
    getHourlySales: function () {
        this.hourlySales = Math.floor(this.avgCst * this.avgCokiePerCst);
    },

     
    
    render: function () {
      let divEl = document.getElementById("SeattleDiv");

     

      let ulEl = document.createElement('ul');
      for (let i = 0; i < workHours.length; i++) {
        Seattle.getAvgCst(23, 65);
        Seattle.getHourlySales();
       this.hourlySaleTwo.push(this.hourlySales);
       let liEl = document.createElement('li');
          liEl.textContent = `${workHours[i]}: ${this.hourlySales} cookies`;
          ulEl.appendChild(liEl);
          
        }
        divEl.appendChild(ulEl);
       
       
       
        total(this.hourlySaleTwo); 
     

    let result = document.createElement('p');
     result.textContent = `Total ${total(this.hourlySaleTwo)}`;
     divEl.appendChild(result);

     
      
    
    },
  };

  Seattle.render();

  
 

/////////////////////////////////////////////////////////////////////////////////////



  let Tokyo = {
    name: "Tokyo shop",

    minCst: 3,

    maxCst: 24,

    avgCst: 0,

    hourlySales: 0,

    avgCokiePerCst: 1.2,

    hourlySaleTwo: [],


    getAvgCst: function (min, max) {
      this.avgCst = Math.floor(Math.random() * (max - min + 1) + min);
    },

    getHourlySales: function () {
      this.hourlySales = Math.floor(this.avgCst * this.avgCokiePerCst);
    },

    render: function () {
      let divEl = document.getElementById("TokyoDiv");

      let ulEl = document.createElement('ul');
      for (let i = 0; i < workHours.length; i++) {
        Tokyo.getAvgCst(3, 24);
        Tokyo.getHourlySales();
        this.hourlySaleTwo.push(this.hourlySales);
          let liEl = document.createElement('li');
          liEl.textContent = `${workHours[i]}: ${this.hourlySales} cookies`;
          ulEl.appendChild(liEl);
          
      }
      divEl.appendChild(ulEl);


      total(this.hourlySaleTwo); 
    

      let result = document.createElement('p');
      result.textContent = `Total ${total(this.hourlySaleTwo)}`;
      divEl.appendChild(result);

    },
  };

  
  Tokyo.render();





/////////////////////////////////////////////////////////////////////////////////////


  let Dubai = {
    name: "Dubai shop",

    minCst: 11,

    maxCst: 38,

    avgCst: 0,

    hourlySales: 0,

    avgCokiePerCst: 3.7,

    hourlySaleTwo: [],

    getAvgCst: function (min, max) {
      this.avgCst = Math.floor(Math.random() * (max - min + 1) + min);
    },

    getHourlySales: function () {
      this.hourlySales = Math.floor(this.avgCst * this.avgCokiePerCst);
    },

    render: function () {
      let divEl = document.getElementById("DubaiDiv");

      let ulEl = document.createElement('ul');
      for (let i = 0; i < workHours.length; i++) {
        Dubai.getAvgCst(11, 38);
        Dubai.getHourlySales();
        this.hourlySaleTwo.push(this.hourlySales);
          let liEl = document.createElement('li');
          liEl.textContent = `${workHours[i]}: ${this.hourlySales} cookies`;
          ulEl.appendChild(liEl);
          
      }
      divEl.appendChild(ulEl);



      total(this.hourlySaleTwo); 
    

      let result = document.createElement('p');
      result.textContent = `Total ${total(this.hourlySaleTwo)}`;
      divEl.appendChild(result);


    },
  };

  
  Dubai.render();



/////////////////////////////////////////////////////////////////////////////////



  let Paris = {
    name: "Paris shop",

    minCst: 20,

    maxCst: 38,

    avgCst: 0,

    hourlySales: 0,

    avgCokiePerCst: 2.3,


    hourlySaleTwo: [],

    getAvgCst: function (min, max) {
      this.avgCst = Math.floor(Math.random() * (max - min + 1) + min);
    },

    getHourlySales: function () {
      this.hourlySales = Math.floor(this.avgCst * this.avgCokiePerCst);
    },

    render: function () {
      let divEl = document.getElementById("ParisDiv");

      let ulEl = document.createElement('ul');
      for (let i = 0; i < workHours.length; i++) {
        Paris.getAvgCst(20, 38);
        Paris.getHourlySales();
        this.hourlySaleTwo.push(this.hourlySales);
          let liEl = document.createElement('li');
          liEl.textContent = `${workHours[i]}: ${this.hourlySales} cookies`;
          ulEl.appendChild(liEl);
         
      }
      divEl.appendChild(ulEl);




      total(this.hourlySaleTwo); 
    

     let result = document.createElement('p');
     result.textContent = `Total ${total(this.hourlySaleTwo)}`;
     divEl.appendChild(result);
    },
  };

  
  Paris.render();


//////////////////////////////////////////////////////////////////////////



  let Lima = {
    name: "Lima shop",

    minCst: 2,

    maxCst: 16,

    avgCst: 0,

    hourlySales: 0,

    avgCokiePerCst: 4.6,


    hourlySaleTwo: [],

    getAvgCst: function (min, max) {
      this.avgCst = Math.floor(Math.random() * (max - min + 1) + min);
    },

    getHourlySales: function () {
      this.hourlySales = Math.floor(this.avgCst * this.avgCokiePerCst);
    },

    render: function () {
      let divEl = document.getElementById("LimaDiv");

      let ulEl = document.createElement('ul');
      for (let i = 0; i < workHours.length; i++) {
        Lima.getAvgCst(2, 16);
        Lima.getHourlySales();
        this.hourlySaleTwo.push(this.hourlySales);
          let liEl = document.createElement('li');
          liEl.textContent = `${workHours[i]}: ${this.hourlySales} cookies`;
          ulEl.appendChild(liEl);
         
      }
      divEl.appendChild(ulEl);



      total(this.hourlySaleTwo); 
    

      let result = document.createElement('p');
      result.textContent = `Total ${total(this.hourlySaleTwo)}`;
      divEl.appendChild(result);


     
    },
  };

  
  Lima.render();



