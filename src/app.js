/* eslint-disable */
import "./style.css";

let getCard = () => {
  let numbers = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1"
  ];
  let randomNumber = Math.floor(Math.random() * 12);
  return numbers[randomNumber];
};

let getSuit = () => {
  let suit = ["♥ ", "♠ ", "♣", "♦"];
  let randomSuit = Math.floor(Math.random() * suit.length);
  return suit[randomSuit];
};

let randomTopSuit = getSuit();

window.onload = function() {
  document.querySelector(".top-suit").innerHTML = randomTopSuit;
  document.querySelector(".number").innerHTML = getCard();
  document.querySelector(".bottom-suit").innerHTML = randomTopSuit;
};

let refreshPage = function() {
  location.reload();
};

const refreshButton = document.querySelector("#myButton");

refreshButton.addEventListener("click", refreshPage);

// document.querySelector(".card").innerHTML = getCard();

// change card every 10 seconds
// setTimeout(function() {
//   document.querySelector(".card").classList.add(getSuit());
//   document.querySelector(".card").innerHTML = getCard();
// }, 10000);

// // Allow the user to specify the card width and height using text inputs.
// // Get input from user to change height and width of card
// const userInput = document.getElementById("userInput");
// userInput.addEventListener("input", () => {});
