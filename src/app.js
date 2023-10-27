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
  let suit = ["♦", "♠", "♣", "♥"];
  let randomSuit = Math.floor(Math.random() * suit.length);
  return suit[randomSuit];
};

let getSuitBottom = () => {
  let suit = ["♦", "♠", "♣", "♥"];
  let randomSuit = Math.floor(Math.random() * suit.length);
  return suit[randomSuit];
};

let randomTopSuit = getSuit();
// let randomBottomSuit = getSuit();

window.onload = function() {
  var topSuit = (document.querySelector(".top-suit").innerHTML = randomTopSuit);
  var bottomSuit = (document.querySelector(
    ".bottom-suit"
  ).innerHTML = randomTopSuit);
  document.querySelector(".number").innerHTML = getCard();

  if (
    (topSuit == "♥" && bottomSuit == "♥") ||
    (topSuit == "♦" && bottomSuit == "♦")
  ) {
    var topSuit = (document.querySelector(".top-suit").style.color = "red");
    var bottomSuit = (document.querySelector(".bottom-suit").style.color =
      "red");
    document.querySelector(".number").style.color = "red";
  }
};

let refreshPage = function() {
  location.reload();
};

const refreshButton = document.querySelector("#myButton");

refreshButton.addEventListener("click", refreshPage);

// setInterval(refreshPage, 10000);

// // Allow the user to specify the card width and height using text inputs
// // Get input from user to change height and width of card
// let userDimensions = () => {};

const userWidth = document.getElementsByClassName("width");
userInput.addEventListener("input", () => {
  console.log();
});

const userHeight = document.getElementsByClassName("height");
userInput.addEventListener("input", () => {
  console.log();
});

document
  .querySelector("#userInput")
  .addEventListener("submit", function(event) {
    const inputWidth = document.getElementById("width").value;
    console.log(inputWidth);
    const inputHeight = document.getElementById("height").value;
    console.log(inputHeight);
    const cardBody = document.querySelector(".card");
    cardBody.style.width = inputWidth + "px";
    cardBody.style.height = inputHeight + "px";
  });
