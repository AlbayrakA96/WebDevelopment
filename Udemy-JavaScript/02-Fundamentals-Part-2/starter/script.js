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
