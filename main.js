let currentNum = "";
let previousNum = "";
let operator = "";

window.addEventListener("keydown", handleKeyPress)

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");

const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

equal.addEventListener("click", () => {
    if (currentNum != "" && previousNum != "")
        calculate();
})

clear.addEventListener("click", () => {
    clearCalculator();
})

numberButtons.forEach(btn => {
    btn.addEventListener("click", (ev) => {
        handleNumber(ev.target.textContent)
    })
})

operators.forEach(btn => {
    btn.addEventListener("click", (ev) => {
        handleOperator(ev.target.textContent);
    })
})

decimal.addEventListener("click", () => {
    addDecimal();
})

// equal.addEventListener("click", calculate);

function handleNumber(number) {
    if (previousNum !== "" && currentNum !== "" && operator === "") {
        previousNum = "";
        currentDisplayNumber.textContent = currentNum;
    }
    if (currentNum.length <= 11) {
        currentNum += number;
        currentDisplayNumber.textContent = currentNum;
    }
} 

function handleOperator(op) {
    if (previousNum === "") {
        previousNum = currentNum;
        operatorCheck(op);
    } else if (currentNum === "") {
        operatorCheck(op);
    } else {
        calculate();
        operator = op;
        currentDisplayNumber.textContent = "0";
        previousDisplayNumber.textContent = previousNum + " " + operator;
    }
}

function operatorCheck(text) {
    operator = text;
    previousDisplayNumber.textContent = previousNum + " " + operator;
    currentDisplayNumber.textContent = "0";
    currentNum = "";
    
}


function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        previousNum += currentNum;
    } else if (operator === "-") {
        previousNum -= currentNum;
    } else if (operator === "x") {
        previousNum *= currentNum;
    } else if (operator === "/") {
        if (currentNum == 0) {
            previousNum = "Error";
            displayResult();
            return;
        }
        previousNum /= currentNum;
    }

    previousNum = roundNumber(previousNum);
    previousNum = previousNum.toString();
    displayResult();
}

function roundNumber(num) {
    return Math.round(num * 1000000) / 1000000
}

function displayResult() {
    
    if (previousNum.length <= 11) {
        currentDisplayNumber.textContent = previousNum;
    } else {
        currentDisplayNumber.textContent = previousNum.slice(0,11) + "...";
    }
    previousDisplayNumber.textContent = "";
    operator = "";
    currentNum = "";
}

function clearCalculator() {
    currentNum = "";
    previousNum = "";
    operator = "";
    currentDisplayNumber.textContent = "0";
    previousDisplayNumber.textContent = "";
}


function addDecimal() {
    if (!currentNum.includes('.')) {
        currentNum += ".";
        currentDisplayNumber.textContent = currentNum;
    }
}

function handleKeyPress(e) {
    e.preventDefault();

    if (e.key >= 0 && e.key <= 9) {
        handleNumber(e.key);
    } 
    if (e.key === "Enter" || (e.key === "=" && currentNum != "" && previousNum != "")) {
        calculate();
    }
    if (e.key === "+" || e.key === "-" || e.key === "/") {
        handleOperator(e.key);
    }
    if (e.key === "*") {
        handleOperator("x");
    }
    if (e.key === ".") {
        addDecimal();
    }
    if (e.key === "Backspace") {
        handleDelete();
    }
}

function handleDelete() {
    if (currentNum != "") {
        currentNum = currentNum.slice(0,-1);
        currentDisplayNumber.textContent = currentNum;
        if (currentNum === "") {
            currentDisplayNumber.textContent = "0";

        }
    }

    if (currentNum === "" && previousNum !== "" && operator === "") {
        previousNum = previousNum.slice(0,-1);
        currentDisplayNumber.textContent = previousNum;
    }
}