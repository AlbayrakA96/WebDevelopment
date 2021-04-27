// Math operators-------------------------------
/*
const currentYear = 2021;
const ageAbdus = currentYear - 1996;
const ageFriend = currentYear - 1999;
console.log(ageAbdus, ageFriend);

console.log(ageAbdus * 2, ageAbdus / 10, 2 ** 3);
2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Abdusselam";
const lastName = "Albayrak";
console.log(firstName + " " + lastName);
*/

// Assignment operators---------------------------
/* let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1

console.log(x); */

// Comparison operators-----------------------------

// console.log(ageAbdus > ageFriend); // >, <, >=, <=
// console.log(ageFriend >= 18);

// const isFullAge = ageAbdus >= 18;
// console.log("isFullAge:", isFullAge);

// Operators precedence ---------------------------
// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageAbdus + ageFriend) / 2;
// console.log("averageAge:", averageAge);

// Coding Challange #1 ----------------------------------------------------------------
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

// Strings and Template literals -----------------------------------------------------------
/*
const firstName = "Abdusselam";
const job = "front-end developer";
const birthYear = 1996;
const currentYear = 2021;

const abdusInfo =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  "years old " +
  job +
  "!";
console.log(abdusInfo);

const abdusInfoNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}!`;
console.log(`Just a regular string`);
console.log(`String
multiple
lines`);
*/

/*
Taking decicisions if / else statemens----------------------------------------------------------------
const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving license 👍");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`${century} century`);
*/

// Coding Challange #2 ----------------------------------------------------------------
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higer than John's ${BMIJohn}`);
} else {
  console.log(`John's ${BMIJohn} is higer than Mark's BMI ${BMIMark}`);
}
*/

// Type Conversion and Coercion--------------------------------------
// type conversion ------------
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// // NaN is Not a Number / invalid number

// console.log(String(23), 23);

// // type coercion ---------------
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);

// let n = "1" + 1; // '11'
// n = n - 1;
// console.log(n);

// Truthy and Falsy values --------------------------------------------
// 5 Falsy values: 0, '', undefined, null, NaN,
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// Equality Operators ()== vs. ===) --------------------------------

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");

// if (age == 18) console.log("You just became an adult :D (loose)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(typeof favourite);

// if (favourite === 28) {
//   // '28' == 28
//   console.log("Cool! 28 is an amazing number");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 28 or 7");
// }

// if (favourite !== 28) console.log("Why not 28?");

// Logical operators -------------------------------------------------------

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // And
// console.log(hasDriversLicense || hasGoodVision); // Or
// console.log(!hasDriversLicense);

// // const shouldDrive = hasDriversLicense && hasGoodVision; //

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Sarah is able to drive!");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// Coding Challenge #3 ---------------------------------------------------
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const averageDolphins = (96 + 108 + 89) / 3;
// const averageKoalas = (88 + 91 + 110) / 3;

// if (averageDolphins > averageKoalas) {
//   console.console.log();
// }

// let country = "Holland";
// let continent = "Europe";
// let population = 18000000;

// console.log(country, continent, population);

// LECTURE: Data Types
/*
let isIsland = "Holland";
isIsland = false;

let language;
console.log(isIsland, language);
*/

// Let, Const and Var
// const language = 'Nederlands';

//LECTURE Basic Operators
/*
let population = 18;
const halfPopulation = population / 2;
console.log(halfPopulation);
const country = "Holland";
const continent = "Europe";
const language = "Dutch";

let Finland = 6;
console.log(population > Finland);

console.log(population < 33);

let description = country + " is in " + continent + "," + " and its " + population + "people speak " + language;

console.log(description);
*/

// Operator Precedence

// Coding Challenge #3

// const avDolphins = Math.floor((1000 + 95 + 123) / 3);
// const avKoalas = Math.floor((1 + 95 + 123) / 3);
// if (avDolphins > avKoalas && avDolphins >= 100) {
//     console.log(`The winner are the Dolphins with a score of ${avDolphins}`);
// } else if (avKoalas > avDolphins && avKoalas >= 100) {
//     console.log(`The winner are the Koalas with a score of ${avKoalas}`);
// }
// else if (avDolphins === avKoalas && avKoalas >= 100 && avDolphins >= 100) {
//     console.log(`The game has tied Koalas ${avKoalas}, Dolphins ${avDolphins}`);
// }
// else {
//     console.log(`There is no winner! SCORE IS BELOW: 100, Koalas:${avKoalas}, Dolphins:${avDolphins}`);
// }

// Coding Challenge #4 ------------------------------

// const bill = 400;
// const tip15 = bill * 0.15;
// const tip20 = bill * 0.20;
// const tip = bill >= 50 && bill <= 300 ? tip15 : tip20;
// console.log(`The bill was $${bill},- the tip was $${tip}, and the total value = ${bill + tip},-`);
