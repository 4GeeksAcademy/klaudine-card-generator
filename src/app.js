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

let randomTopSuit = getSuit();

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

document
  .querySelector("#userInput")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    const inputWidth = document.getElementById("width").value;
    const inputHeight = document.getElementById("height").value;
    const cardBody = document.querySelector(".card");
    cardBody.style.width = inputWidth + "px";
    cardBody.style.height = inputHeight + "px";
  });
