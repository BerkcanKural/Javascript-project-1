'use strict';
const dice = document.querySelector(".dice");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
var player1Score = 0;
var player2Score = 0;
var score1 = parseInt(document.querySelector("#score--0").textContent);
var score2 = parseInt(document.querySelector("#score--1").textContent);
const BtnHold = document.querySelector(".btn--hold");
const BtnRoll = document.querySelector(".btn--roll");
const BtnNew = document.querySelector(".btn--new");

function RandNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var sadice = RandNum(1, 6);

function RollDice() {
    sadice = RandNum(1, 6);
    dice.src = `dice-${sadice}.png`;
    if (player1.classList.contains("player--active")) {
        player1Score += sadice;
        document.querySelector("#current--0").textContent = player1Score;

    } else if (player2.classList.contains("player--active")) {
        player2Score += sadice;
        document.querySelector("#current--1").textContent = player2Score
    }
    if (sadice == 1 && player1.classList.contains("player--active")) {
        player1.classList.remove("player--active");
        player2.classList.add("player--active");
        player1Score = 0;
        document.querySelector("#current--0").textContent = player1Score
    } else if (sadice == 1 && player2.classList.contains("player--active")) {
        player2.classList.remove("player--active");
        player1.classList.add("player--active");
        player2Score = 0;
        document.querySelector("#current--1").textContent = player2Score
    }

}


function Hold() {
    score1 += player1Score;
    score2 += player2Score;
    if (player1.classList.contains("player--active")) {

        player1.classList.remove("player--active");
        player2.classList.add("player--active");
        player1Score = 0;
        document.querySelector("#current--0").textContent = 0;
        document.querySelector("#score--0").textContent = score1;

    } else if (player2.classList.contains("player--active")) {

        player2.classList.remove("player--active");
        player1.classList.add("player--active");
        player2Score = 0;
        document.querySelector("#current--1").textContent = 0;
        document.querySelector("#score--1").textContent = score2;
    }
}



function newgame() {
    location.reload()
}
BtnHold.addEventListener("click", Hold);
BtnRoll.addEventListener("click", RollDice);
BtnNew.addEventListener("click", newgame);