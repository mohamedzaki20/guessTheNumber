"use strict";

// - getting the DOM element by class
// - document.getElementsByClassName returns array of all elements has the same class
// - create onclick event listener to deal with check btn
// - onclick callback function should deal with many things:
// 1- chcek if entered value valid or not (1->20)
// 2- check in the number === the secretNumber
// 3- while(input != secretNumber) ->
//      - keep asking the user to enter another number
//      - decrement value of trys trys-- and spit message "wrong guess"
//      - break the loop if the user enter numer === secretNumber and set highscore to trys
//      - spit message "correct guess"
// -create onclick event listener to deal with again btn
// - create onclick event listener to deal with again btn
// - onclick callback function should deal with many things:
// 1- reset the trys counter to 20
// 2- highscore stays the same
// 3- reset message to start guessing
// 4- reset the input field to be empty
// 5- reset the divNumber to "?" again
// Catch the DOM element to manipulate it
const outputNumber = document.querySelector(".number");
const inputNumber = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const message = document.querySelector(".message");
const highscore = document.querySelector(".highscore");
const score = document.querySelector(".score");

const max = Number(prompt(`Please Enter The Max. Number:) `));
const min = Number(prompt(`Please Enter The Max. Number:) `));
let trys = max;
// Generate randon numbers between max and min values
let secretNumber = Math.floor(Math.random() * (max - min) + min);

const checkNumber = function () {
  score.innerHTML = trys;

  for (let i = 0; i < max; i++) {
    if (inputNumber.value != secretNumber && inputNumber.value > secretNumber) {
      message.innerHTML = "Too High";
    } else if (
      inputNumber.value != secretNumber &&
      inputNumber.value < secretNumber
    ) {
      message.innerHTML = "Too Low";
    } else if (inputNumber.value == secretNumber) {
      message.innerHTML = "Correct number ....";
      document.body.style.backgroundColor = "#60b347";

      if (trys > highscore.innerHTML) {
        highscore.innerHTML = trys;
      }
      break;
    }
  }
  trys -= 1;

  outputNumber.innerHTML = inputNumber.value;
};

const again = function () {
  inputNumber.value = "";
  outputNumber.innerHTML = "?";
  message.innerHTML = "Start guessing...";
  score.innerHTML = max;
  trys = max;
  document.body.style.backgroundColor = "#222";
  secretNumber = Math.floor(Math.random() * (max - min) + min);
};

checkBtn.addEventListener("click", checkNumber);
againBtn.addEventListener("click", again);
