'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 50;
// document.querySelector('.guess').value = 50;

const randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.backgroundColor = '15rem';
  //   document.getElementById('body').reset();
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent =
      'Dit is geen valide nummer!';
    // When player wins
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = 'Green';

    document.querySelector('.number').style.width = '30rem';
    // When guess is to high
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Te hoog!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'Orange';
    } else {
      document.querySelector('.message').textContent = 'Je heb verloren!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'Red';
    }
    // When guess is to low
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Te laag!';
      score--;
      document.querySelector('.score').textContent = score;

      document.querySelector('body').style.backgroundColor = 'Orange';
    } else {
      document.querySelector('.message').textContent = 'Je heb verloren!';
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = 'Red';
    }
  }
});
