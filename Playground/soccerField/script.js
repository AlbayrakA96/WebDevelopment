"use strict";

const shootButton = document.getElementById("game--shoot");
const gameVoetbal = document.getElementById("game--voetbal");

// Goal Text
const goalText = document.getElementById("game--goalText");
const scoreBord = document.getElementById("game--scoreBord");
const resetGame = document.getElementById("game--reset");

let score = 0;
let text = "";
let playing = true;


resetGame.addEventListener("click",function() {
    scoreBord.textContent = 0;
    goalText.classList.add("hidden");
})


shootButton.addEventListener("click", function () {
  const schietCoord1 = Math.trunc(Math.random() * 6) + 1;
  const schietCoordH = Math.trunc(Math.random() * 76) + 175;
  const schietCoordB = Math.trunc(Math.random() * 228) + 300;
  const missenCoordH = Math.trunc(Math.random() * 51) + 290;
  if (playing) {
    if (schietCoord1 > 3) {
      gameVoetbal.style.bottom = `${schietCoordH}px`;
      gameVoetbal.style.left = `${schietCoordB}px`;
      goalText.classList.remove("hidden");
      goalText.textContent = "GOAALLLLLLLLLL";

      score++;
      scoreBord.textContent = score;
      if (score === 5) {
        goalText.textContent = "GEWONNEN";
        // goalText.classList.add("hidden");
        resetFunction();
        playing = false;
      } 
      console.log(score);
    } else {
      gameVoetbal.style.bottom = `${missenCoordH}px`;
      gameVoetbal.style.left = `${schietCoordB}px`;
      goalText.classList.remove("hidden");
      goalText.textContent = "MISSSSSSSSS";
    }
  }
});

// 150

// missen bottom 220px minimaal 330maximaal
