"use strict";

// document.querySelector(".message").textContent = "Correct Number!";
// document.querySelector(".number").textContent = "13";
// document.querySelector(".score").textContent = 20;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);

// const displayMessage = function (message) {
//   document.querySelector(".message").textContent = message;
// };

const guess = Number(document.querySelector(".guess").value);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
    //displayMessage('No number');
  }

  //When player wins
  else if (guess === secretNumber) {
    console.log("You are the winner");
    //displayMessage('Correct number);
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".message").textContent = "Correct Number!";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
   else if (guess !== secretNumber) {
    // console.log(score, "*****");
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high!" : "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      console.log("You lost");
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});



//Homework 
document.querySelector(".again").addEventListener("click", function(){
  document.querySelector("body").style.backgroundColor="#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value= "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20; 
  document.querySelector(".score").textContent = score;
});
