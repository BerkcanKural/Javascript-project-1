'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");

function open() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function close() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
function escap(e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        close();
    }
}

for (let i = 0; i < btnOpen.length; i++) {
    btnOpen[i].addEventListener("click", open);
}



btnClose.addEventListener("click", close);
overlay.addEventListener("click", close);
document.addEventListener("keydown", escap);