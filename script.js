"use strict";

console.log(`hello mom`);

const secret = Math.trunc(Math.random() * 20) + 1;
console.log(secret);

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no input
  if (!guess) {
    document.querySelector(".result").textContent = "no number!";

    // when user's answer is correct
  } else if (guess === secret) {
    document.querySelector(".result").textContent = "you win!";
    document.querySelector(".number").textContent = secret;
    document.querySelector(".highscore").textContent = "🥇 HIGHSCORE: " + score;
    document.querySelector(".check").textContent = "retry";

    // reset
    document.querySelector(".check").addEventListener("click", function () {
      window.location.reload();
    });
  }

  // when number is too low
  else if (guess < secret) {
    if (score > 0) {
      document.querySelector(".result").textContent = "too low number!";
      document.querySelector(".score").textContent = "🏆 score: " + score--;
    } else {
      document.querySelector(".result").textContent = "🤡 you lose! 🤡";
      document.querySelector(".score").textContent = "🏆 score: 0";
    }
  }

  // when number is too high
  else if (guess > secret) {
    if (score > 0) {
      document.querySelector(".result").textContent = "too high number!";
      document.querySelector(".score").textContent = "🏆 score: " + score--;
    } else {
      document.querySelector(".result").textContent = "🤡 you lose! 🤡";
      document.querySelector(".score").textContent = "🏆 score: 0";
    }
  }
});
