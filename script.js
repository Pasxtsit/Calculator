
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

opButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        displayResult.textContent = "";
        const operator = button.textContent;
        if (displayPrevious.textContent === "" && !isLastCharDot(displayCurrent.textContent)) {
            addOperator(operator);
            displayPrevious.textContent = displayCurrent.textContent;
            displayCurrent.textContent = "";
        }
    });
});
function addOperator(operator) {
    const currentValue = displayCurrent.textContent;
    const lastChar = currentValue[currentValue.length - 1];

    if (currentValue !== "" && !isNaN(lastChar)) {
        displayCurrent.textContent += operator;
    }
}
function isLastCharDot(text) {
    const lastChar = text[text.length - 1];
    return lastChar === ".";
}


btnEq.addEventListener('click', function () {
    displayResult.textContent = "";
    operate();
});

function addNumbers(num1, num2) {
    return num1 + num2;
}

function subtractNumbers(num1, num2) {
    return num2 - num1;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

function divideNumbers(dividend, divisor) {
    if (divisor === 0) {
        return 'INCONCEIVABLE';
    }
    const result = dividend / divisor;
    return Number(result.toFixed(10));
}

function operate() {
    const lastChar = displayPrevious.textContent.slice(-1);
    const firstNum = parseFloat(displayCurrent.textContent);
    const secondNum = parseFloat(displayPrevious.textContent.slice(0, -1));
    let result;

    switch (lastChar) {
        case '+':
            result = addNumbers(firstNum, secondNum);
            break;
        case '-':
            result = subtractNumbers(firstNum, secondNum);
            break;
        case '*':
            result = multiplyNumbers(firstNum, secondNum);
            break;
        case '÷':
            result = divideNumbers(secondNum, firstNum);
            break;
        default:
            alert("Invalid operation");
            return;
    }

    if (!isNaN(result)) {
        displayCurrent.textContent = result.toString();
        displayResult.textContent = "";
    } else {
        displayResult.textContent = result.toString();
        displayCurrent.textContent = "";
    }
    displayPrevious.textContent = "";
}