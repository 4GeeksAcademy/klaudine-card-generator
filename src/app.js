/* eslint-disable */
import "./style.css";

document.addEventListener("click", function() {
  document.querySelector(".card").classList.add(getSuit());
  document.querySelector(".card").innerHTML = getCard();
});

let getCard = () => {
  var numbers = [
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
  var randomNumber = Math.floor(Math.random() * 12);
  return numbers[randomNumber];
};

let getSuit = () => {
  var suit = ["heart", "spade", "club", "diamond"];
  var randomSuit = Math.floor(Math.random() * suit.length);
  return suit[randomSuit];
};
