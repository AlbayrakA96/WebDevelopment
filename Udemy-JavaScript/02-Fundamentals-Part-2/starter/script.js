// "use strict";

// Strictmode

/* let hasDriversLicense = false;
 const passTest = true;
 if (passTest) hasDriversLicense = true;
 if (hasDriversLicense) console.log("i can drive"); */

/* Functions --------------------------------------- (the process of using a function is called invoking, running or calling the function) */

/*
function logger() {
  console.log("My name is Abdusselam");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function assignment 
function describeCountry(country, population, capitalCity) {
    const info = `${country} has ${population}M. people and its capital city is ${capitalCity}.`;
    return info;
}
const turkije = describeCountry('Turkey', 18, 'Istanbul');
console.log(turkije); */

// Function declaration vs expression
/* function calcAge1(birthYear) {
  return 2021 - birthYear;
}
const age1 = calcAge1(1996);

// Function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
const age2 = calcAge2(1996);

console.log(age2, age1); */
/*
function percentageOfWorld1(country, population) {
    const perc = Math.round((population / 7900) * 100);
    return `${country} has ${population} Million people, its about ${perc}percent of the world`;
}
const turkey = percentageOfWorld1("Turkey", 1441);
const china = percentageOfWorld1("China", 3441);
const iraq = percentageOfWorld1("Iraq", 2441);
console.log(turkey);
console.log(china);
console.log(iraq);
const percentageOfWorld2 = function (country, population) {
    const perc = Math.round((population / 7900) * 100);
    return `${country} has ${population} Million people, its about ${perc}percent of the world`;
}
const country2 = percentageOfWorld2("Turkey", 2556);
console.log(country2);
// ${Naam} heeft een ${schoenmaat}.
function kledingDetail(naam, schoenmaat) {
    return `${naam} heeft een schoenmaat van:${schoenmaat}.`
}
// Functions declaration vs expression  

const man = kledingDetail("Abduss", 45);
console.log(man);
// expression
const kledingDetails = function (naam, schoenmaat) {
    return `${naam} heeft een schoenmaat van: ${schoenmaat}.`
}
const man1 = kledingDetails("Sayf", 41);
console.log(man1); */

// Arrow functions
// Arrow function
/* const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);
const yearsRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
const percentageOfWorld3 = (country, population) => {
    const perc = Math.round((population / 7900) * 100);
    return `${country} has ${population} Million people, its about ${perc}percent of the world`;
}
const nation = percentageOfWorld3("Colombia", 50);
console.log(nation); */

// Functions calling other functions -----------------------------------------
/* function cutFruitPieces(fruit) {
  return fruit * 8;
}

function fruitProcessor(apples, oranges) {
  const appelPieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${appelPieces} piece of apples and ${orangePieces} piece of oranges.`;
  return juice;
}

const milkshake = fruitProcessor(2, 3);
console.log(milkshake); */
/* const percent1 = (population) => {
    const output = (population / 7900) * 100;
    return output;
}
const describePopulation = (country, population) => {
    const percentage = percent1(population);
    return `${country} has ${population} million people,
    which is about ${percentage} % of the world. `;
}
const nation5 = describePopulation("Holland", 18);
console.log(nation5); */

// Review functions
// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return "Je hoeft niet meer te werken";
//   }

//   //   return `${firstName} retires in ${retirement} years`;
// };
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return "Je hoeft niet meer te werken";
//   }

//   //   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1996, "Abdusselam"));
// console.log(yearsUntilRetirement(1906, "Abdusselam"));

// const percent1 = (population) => {
//   const output = (population / 7900) * 100;
//   return output;
// };
// const describePopulation = (country, population) => {
//   const percentage = percent1(population);
//   return `${country} has ${population} million people,
//     which is about ${percentage} % of the world. `;
// };
// const voortgangCursus = (module) => Math.round((module / 21) * 100);
// const checkStatus = (avgStudent) => {
//   const avgStudent = voortgangCursus(5);
//   if (avgStudent > 0 && avgStudent < 15) {
//     console.log(`Student heeft ${avgStudent} % af, ga door naar de module Functions`);
//   } else if (avgStudent >= 15 && avgStudent < 40) {
//     console.log(`Student heeft ${avgStudent} % af ga door naar de module Arrays`);
//   } else if (avgStudent >= 40 && avgStudent < 70) {
//     console.log(`Student heeft ${avgStudent} % af ga door naar de module Objects`);
//   } else if (avgStudent >= 70 && avgStudent < 99) {
//     console.log(`Student heeft ${avgStudent}% af ga door naar de coding Challange`);
//   } else if (avgStudent == 100) {
//     console.log(`Gefelicteerd! Student heeft ${avgStudent} % de module is succesvol afgerond`);
//   } else {
//     console.log("Start de module");
//   }
// };
// checkStatus();
// IAM_Sayf. & Abdusselam

// Objects ---------------------------------------------------------------

// const abdusArray = ["Abdusselam", "Albayrak", 2021 - 1996, "Trainee", ["Sayf", "Irza", "Yassin"]];

// console.log(abdusArray[4]);

// console.log(abdus);

// console.log(abdus.lastName);
// console.log(abdus["lastName"]);

// const nameKey = "Name";
// console.log(abdus["first" + nameKey]);
// console.log(abdus["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Abdus? Choose between firstName, lastName, age, job, location, and friends");

// if (abdus[interestedIn]) {
//   console.log(abdus[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

// abdus.country = "Holland";
// abdus["linkedin"] = "@albayraka96";

// console.log(abdus);

// const abdus = {
//   firstName: "Abdusselam",
//   lastName: "Albayrak",
//   age: 18,
//   birthYear: 1996,
//   job: "Student",
//   friends: ["Yassin", "Sayf"],
//   location: "Zoetermeer",
//   country: "Holland",
//   hasDriversLicense: true,

//   calcAge: function () {
//     return 2021 - this.birthYear;
//   },
// };

// console.log(abdus.calcAge());

// Coding Challenge #3 ----------------------------------------------------------------

// const markInfo = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const johnInfo = {
//   fullName: "John Smith",
//   mass: 192,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// markInfo.calcBMI();
// johnInfo.calcBMI();

// console.log(markInfo.bmi, johnInfo.bmi);

// if (markInfo.bmi > johnInfo.bmi) {
//   console.log(`${markInfo.fullName}'s BMI (${markInfo.bmi}) is higher than ${johnInfo.fullName}'s BMI (${johnInfo.bmi})`);
// } else if (johnInfo.bmi > mariInfo.bmi) {
//   console.log(`${johnInfo.fullName}'s BMI (${johnInfo.bmi}) is higher than ${markInfo.fullName}'s BMI (${markInfo.bmi})`);
// }
// const Ferrari = {
//   model: "Testarossa",
//   topSpeed: 322,
//   weight: 2000,
//   distance: 100,
//   color: ["Enzo red", "Speed Yellow"],
//   meterSecond: function () {
//     this.Sec = (this.topSpeed * 1000) / 3600;
//     return this.Sec;
//   },
//   calcSpeed: function () {
//     this.time = this.distance / this.Sec;
//     // return this.time
//     this.roundTime = Math.round(this.time * 100) / 100;
//     return this.roundTime;
//   },
// };
// Ferrari.meterSecond();
// Ferrari.calcSpeed();
// // Ferrari.calcSpeed();
// console.log(
//   `The Ferrari ${Ferrari.model} has a Topspeed of ${Ferrari.topSpeed} km/h  this means in Max speed it does 100 meters in ${Ferrari.roundTime} seconds.`
// );

// Iteration The for loop ------------------------------------------
// for loop keeps running while condition is true --------------------------------

// const abdusArray = ["Abdus", "Albayrak", 2021 - 1996, "Student", ["Yassin", "Sayf"], true];

// const types = [];

// for (let i = 0; i < abdusArray.length; i++) {
//   console.log(abdusArray[i], typeof abdusArray[i]);

//   types[i] = typeof abdusArray[i];
// }

// console.log(types);

// const years = [1970, 1974, 1995, 1996, 2012];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2021 - years[i]);
// }
// console.log(ages);

// continue and break

// const abdusArray = ["Abdus", "Albayrak", 2021 - 1996, "Student", ["Yassin", "Sayf"]];

//
// for (let i = abdusArray.length - 1; i >= 0; i--) {
//   console.log(i, abdusArray[i]);
// }

// for (let excercise = 1; excercise <= 4; excercise++) {
//   console.log(`------------------ Starting exercise ${excercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Excersie ${excercise}: Lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`You've rolled a 6`);
// }

// Coding challenge #4 ------------------------------------------

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const calcTip = (bills) => {
//     if (bills >= 50 && bills <= 300) {
//         const bill = bills * 0.15;
//         return bill;
//     } else {
//         const bill = bills * 0.20;
//         return bill;
//     }
// }
// for (i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(tips);
// console.log(totals);
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const sum = [];
// for (i = 0; i < arr.length; i++) {
//     arr[i] = arr[i]
//     for (sum = 0; sum.length)
// }
// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//         // sum += arr[i];
//     }
//     console.log(sum);
//     return sum / arr.length;
// }
// console.log(calcAverage(bills));
