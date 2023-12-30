
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

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        displayResult.textContent = "";
        const currentValue = displayCurrent.textContent;
        const buttonValue = button.textContent;
        const newValue = currentValue + buttonValue;

        if (currentValue.length < 16) {
            if (currentValue === "0" && !isNaN(Number(buttonValue))) {
                displayCurrent.textContent = buttonValue;
            } else {
                displayCurrent.textContent = newValue;
            }
        }
    });
});

btnFlo.addEventListener('click', function () {
    displayResult.textContent = "";
    addDecimal();
});
function addDecimal() {
    const currentValue = displayCurrent.textContent;
    if (!currentValue.includes('.')) {
        if (currentValue === "") {
            displayCurrent.textContent = "0.";
        } else {
            displayCurrent.textContent += ".";
        }
    }
}