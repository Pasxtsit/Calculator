
let displayCurrent = document.querySelector(".displayCurrent");
let displayPrevious = document.querySelector(".displayPrevious");
let displayResult = document.querySelector(".displayResult");
const buttons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.op');
const btnC = document.querySelector(".C");
const btnDel = document.querySelector(".Del");
const btnEq = document.querySelector(".eq");
const btnFlo = document.querySelector(".flo");

btnC.addEventListener('click', function () {
    displayCurrent.textContent = "";
    displayPrevious.textContent = "";
    displayResult.textContent = "";
});

btnDel.addEventListener('click', function () {
    displayResult.textContent = "";
    let currentValue = displayCurrent.textContent;
    let newValue = currentValue.slice(0, -1);
    displayCurrent.textContent = newValue;
});

