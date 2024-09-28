/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const bodyPage = document.querySelector("#bodyPage");
  bodyPage.classList.add(
    "bg-success",
    "mt-1",
    "mb-5",
    "d-flex",
    "justify-content-start",
    "align-items-center",
    "flex-column",
    "container-fluid"
  );

  const divCard = document.createElement("div");
  divCard.id = "card";
  divCard.setAttribute("style", "height:200px; width:150px");
  divCard.classList.add("bg-white", "rounded", "shadow");

  const topLeftSymbol = document.createElement("div");
  topLeftSymbol.id = "tlSymbol";
  topLeftSymbol.classList.add("display-3", "m-0", "ps-2");
  topLeftSymbol.innerText = "♦";

  const centerNumber = document.createElement("div");
  centerNumber.id = "cNumber";
  centerNumber.classList.add("display-1", "text-center", "m-0");
  centerNumber.innerText = "A";

  const bottomRightSymbol = document.createElement("div");
  bottomRightSymbol.id = "brSymbol";
  bottomRightSymbol.classList.add("display-3", "text-end", "m-0", "pe-2");
  bottomRightSymbol.innerText = "♦";

  function randomCard() {
    const cardValue = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const cardSymbol = ["♦", "♥", "♠", "♣"];

    const randomValue = Math.floor(Math.random() * 13);
    const randomSymbol = Math.floor(Math.random() * 4);
    ////AQUÍ ME QUEDÉ
    if (randomSymbol <= 1) {
      topLeftSymbol.innerText = cardSymbol[randomSymbol];
      centerNumber.innerText = cardValue[randomValue];
      bottomRightSymbol.innerText = cardSymbol[randomSymbol];
    } else {
    }
  }
  randomCard();

  divCard.append(topLeftSymbol, centerNumber, bottomRightSymbol);

  bodyPage.append(divCard);
};
