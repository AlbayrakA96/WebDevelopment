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

let cryptoCoin = ["Neo", "Ethereum", "Bitcoin", "XRP"];
let neoCoin = cryptoCoin[0];
console.log(neoCoin);

cryptoCoin.push("Syscoin");
console.log(cryptoCoin);

const pricePrediction = (crypto) => {
  cryptoCoin;
  if (crypto === "Neo") {
    return "98.5";
  }
};

pricePrediction("Neo");

let cryptoCoin = ["Neo", "Ethereum", "Bitcoin", "XRP"];
let neoCoin = cryptoCoin[0];
console.log(neoCoin);

cryptoCoin.push("Syscoin");
console.log(cryptoCoin);

const pricePrediction = (crypto) => {
  cryptoCoin;
  if (crypto === "Neo") {
    return "98.5";
  }
};

pricePrediction("Neo");

let cryptoCoin = ["Neo", "Ethereum", "Bitcoin", "XRP"];
let neoCoin = cryptoCoin[0];
console.log(neoCoin);

cryptoCoin.push("Syscoin");
console.log(cryptoCoin);

const pricePrediction = (crypto) => {
  cryptoCoin;
  if (crypto === "Neo") {
    return "98.5";
  }
};

pricePrediction("Neo");
