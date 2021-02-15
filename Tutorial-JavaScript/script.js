// Math operators-------------------------------
// const currentYear = 2021;
// const ageAbdus = currentYear - 1996;
// const ageFriend = currentYear - 1999;
// console.log(ageAbdus, ageFriend);

// console.log(ageAbdus * 2, ageAbdus / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Abdusselam";
// const lastName = "Albayrak";
// console.log(firstName + " " + lastName);

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

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// Strings and Template literals -----------------------------------------------------------

// const firstName = "Abdusselam";
// const job = "front-end developer";
// const birthYear = 1996;
// const currentYear = 2021;

// const abdusInfo =
//   "I'm " +
//   firstName +
//   ", a " +
//   (currentYear - birthYear) +
//   "years old " +
//   job +
//   "!";
// console.log(abdusInfo);

// const abdusInfoNew = `I'm ${firstName}, a ${
//   currentYear - birthYear
// } year old ${job}!`;
// console.log(`Just a regular string`);
// console.log(`String
// multiple
// lines`);

// Taking decicisions if / else statemens----------------------------------------------------------------
// const age = 15;
// const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log("Sarah can start driving license 👍");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(`${century} century`);

// Coding Challange #2 ----------------------------------------------------------------
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higer than John's ${BMIJohn}`);
}
