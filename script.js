"use strict";

console.log(`hello mom`);

let secret = Math.trunc(Math.random() * 20) + 1;
console.log(secret);

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no input
  if (!guess) {
    document.querySelector(".result").textContent = "no number!";

    // when user's answer is correct
  } else if (guess === secret) {
    // window.open("https://www.pornhub.com", "_blank");

    document.querySelector(".result").textContent = "✔️ you win!";
    document.querySelector(".number").textContent = secret;

    // setting the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent =
        "🥇 highscore: " + highscore;
    }
  }

  // when number is too low
  else if (guess < secret) {
    if (score > 1) {
      document.querySelector(".result").textContent = "❌ too low number!";
      score--;
      document.querySelector(".score").textContent = "🏆 score: " + score;
    } else {
      document.querySelector(".result").textContent = "🤡 you lose! 🤡";
      document.querySelector(".score").textContent = "🏆 score: 0";
    }
  }

  // when number is too high
  else if (guess > secret) {
    if (score > 1) {
      document.querySelector(".result").textContent = "❌ too high number!";
      score--;
      document.querySelector(".score").textContent = "🏆 score: " + score;
    } else {
      document.querySelector(".result").textContent = "🤡 you lose! 🤡";
      document.querySelector(".score").textContent = "🏆 score: 0";
    }
  }
});

// retry

document.querySelector(".retry").addEventListener("click", function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  console.log(secret);
  document.querySelector(".result").textContent = "start guessing...";
  document.querySelector(".score").textContent = "🏆 score: " + score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
