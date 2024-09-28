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
    "flex-column",
    "justify-content-center",
    "align-items-center"
  );

  const divCard = document.createElement("div");
  divCard.id = "card";
  divCard.setAttribute("style", "height:205px; width:150px");
  divCard.classList.add(
    "bg-white",
    "rounded",
    "shadow",
    "d-flex",
    "flex-column",
    "justify-content-between",
    "my-3",
    "fonfam"
  );

  const topLeftSymbol = document.createElement("div");
  topLeftSymbol.classList.add("display-3", "m-0", "ps-3", "text-dark");

  const centerNumber = document.createElement("div");
  centerNumber.classList.add("display-1", "text-center", "m-0");

  const bottomRightSymbol = document.createElement("div");
  bottomRightSymbol.classList.add(
    "display-3",
    "text-end",
    "m-0",
    "pe-3",
    "pb-2",
    "text-dark"
  );

  //Función encargada de generar la carta aleatoria
  function randomCard(tlSymbol, cNumber, brSymbol) {
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
    tlSymbol.innerText = cardSymbol[randomSymbol];
    cNumber.innerText = cardValue[randomValue];
    brSymbol.innerText = cardSymbol[randomSymbol];
    if (randomSymbol <= 1) {
      /*Si la carta tiene los símbolos ♦ o ♥, es roja */ tlSymbol.classList.replace(
        "text-dark",
        "text-danger"
      );
      brSymbol.classList.replace("text-dark", "text-danger");
    } else {
      tlSymbol.classList.replace("text-danger", "text-dark");
      brSymbol.classList.replace("text-danger", "text-dark");
    }
  }

  randomCard(topLeftSymbol, centerNumber, bottomRightSymbol);

  //Botón para generar la carta aleatoria
  const btnRandomCard = document.createElement("button");
  btnRandomCard.id = "btnRandom";
  btnRandomCard.innerText = "Aleatorio";
  btnRandomCard.classList.add(
    "btn",
    "btn-primary",
    "d-flex",
    "justify-content-center",
    "shadow",
    "mb-3"
  );

  //Evento clic para generar la carta aleatoria
  btnRandomCard.addEventListener("click", event => {
    const aux = event.target;
    if ((aux.id = "btnRandom")) {
      randomCard(topLeftSymbol, centerNumber, bottomRightSymbol);
    }
  });

  //Inputs para modificar Height & Width
  const textInputs = document.createElement("div");
  textInputs.classList.add(
    "bg-primary",
    "text-white",
    "p-3",
    "rounded",
    "shadow"
  );

  const textHeight = document.createElement("div");
  textHeight.classList.add("pb-1");
  textHeight.innerText = "Modificar Height";
  const inputHeight = document.createElement("input");
  inputHeight.id = "valHeight";
  inputHeight.classList.add("form-control", "mb-3");

  const textWidth = document.createElement("div");
  textWidth.classList.add("pb-1");
  textWidth.innerText = "Modificar Width";
  const inputWidth = document.createElement("input");
  inputWidth.id = "valWidth";
  inputWidth.classList.add("form-control");

  function modHeightAndWidth(card, input) {
    const numHeight = 0;
    const numWidth = 0;
    card.setAttribute("style", `height:205px`);
    card.setAttribute("style", "width:150px");
  }

  textHeight.addEventListener("change", event => {
    const aux = event.target;
    changeHeight(aux.id, divCard);
  });

  function changeHeight(id, card) {
    let h = document.getElementById("valHeight").value;
    let w = document.getElementById("valWidth").value;
    if (h < 205) {
      alert("La Altura (Height) no puede ser menor a 205px");
      document.getElementById("valHeight").value = "";
      return;
    }

    if (id == "valHeight" && w == "") {
      card.setAttribute("style", `height:${h}px; width:150px`);
      return;
    }
    card.setAttribute("style", `height:${h}px; width:${w}px`);
  }

  textWidth.addEventListener("change", event => {
    const aux = event.target;
    changeWidth(aux.id, divCard);
  });
  function changeWidth(id, card) {
    let h = document.getElementById("valHeight").value;
    let w = document.getElementById("valWidth").value;
    if (w < 150) {
      alert("El Ancho (Width) no puede ser menor a 150px");
      document.getElementById("valWidth").value = "";
      return;
    }
    if (id == "valWidth" && h == "") {
      card.setAttribute("style", `height:205px; width:${w}px`);
      return;
    }
    card.setAttribute("style", `height:${h}px; width:${w}px`);
  }

  textHeight.append(inputHeight);
  textWidth.append(inputWidth);
  textInputs.append(textHeight, textWidth);
  divCard.append(topLeftSymbol, centerNumber, bottomRightSymbol);
  bodyPage.append(divCard, btnRandomCard, textInputs);

  //Generar una carta aleatoria cada 10 segundos
  window.setInterval(function() {
    randomCard(topLeftSymbol, centerNumber, bottomRightSymbol);
  }, 10000);
};
