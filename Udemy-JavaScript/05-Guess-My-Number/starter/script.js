'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 50;
// document.querySelector('.guess').value = 50;

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Reset Button -----------------------------------------------

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  score = 20;
  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //   document.getElementById('body').reset();
});

// Submit Button ------------------------------------------------

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('Dit is geen valide nummer!');
    // When player wins
  } else if (guess === randomNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = 'Green';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? 'Te hoog' : 'Te laag');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'Orange';
    } else {
      displayMessage('Je heb verloren!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'Red';
    }
  }
});
// let randomNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(randomNumber);
// let score = 20;
// let highScore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// // Reset Button -----------------------------------------------

// document.querySelector('.again').addEventListener('click', function () {
//   randomNumber = Math.trunc(Math.random() * 20) + 1;
//   console.log(randomNumber);
//   score = 20;
//   document.querySelector('.guess').value = '';

//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.score').textContent = score;
//   displayMessage('Start guessing...');
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   //   document.getElementById('body').reset();
// });

// // Submit Button ------------------------------------------------

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   // When there is no input
//   if (!guess) {
//     displayMessage('Dit is geen valide nummer!');
//     // When player wins
//   } else if (guess === randomNumber) {
//     displayMessage('Correct Number!');
//     document.querySelector('.number').textContent = randomNumber;
//     document.querySelector('body').style.backgroundColor = 'Green';

//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }

//     // When guess is wrong
//   } else if (guess !== randomNumber) {
//     if (score > 1) {
//       displayMessage(guess > randomNumber ? 'Te hoog' : 'Te laag');
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('body').style.backgroundColor = 'Orange';
//     } else {
//       displayMessage('Je heb verloren!');
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'Red';
//     }
//   }
// });
