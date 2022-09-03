//variables/constants here please
const calcDisplay = document.querySelector("#calcDisplay");
let numStringInput1 = "";
let numStringInput2 = "";

let operatorSign = "";

let solution;       //keep as number, return to string? does it matter?

//works in dev console
function add(num1, num2) {  //remember, despite their parameter names, these arguments will be strings!
    const addend1 = Number(num1);
    const addend2 = Number(num2);

    const sum = addend1 + addend2;

    return sum;
}

//also works in dev console
function subtract(num1, num2) {
    const minuend = Number(num1);
    const subtrahend = Number(num2);

    const difference = minuend - subtrahend;

    return difference;
}

//seems to work in dev console
function multiply(num1, num2) {
    const multiplicand = Number(num1);
    const multiplier = Number(num2);

    const product = multiplicand * multiplier;

    return product;
}

//seems to work in dev console
function divide (num1, num2) {
    const dividend = Number(num1);
    const divisor = Number(num2);

    const quotient = dividend / divisor;

    return quotient;
}

//seems to work in dev console 
function operate(operatorSign) {    //would it be/look better if this function took the numbers as parameters and everything else stayed the same? change variable names below too obviously
    let solution = 0;
    
    if (numStringInput2 !== "") {
        switch (operatorSign) {
            case "+":
                solution = add(numStringInput1, numStringInput2);
                break;

            case "-":
                solution = subtract(numStringInput1, numStringInput2);
                break;

            case "*":
                solution = multiply(numStringInput1, numStringInput2);
                break;

            case "/":
                solution = divide(numStringInput1, numStringInput2);
                break;
        }

        return solution;
    }
    else return numStringInput1;
}

//writing out loose logic for the buttonHandler functions... may need to heavily modify once eventListeners are added?

function operationButtonHandler(e) {
    if (numStringInput1 == "") {
        return;
    }
    
    operatorSign = e.target.textContent;
    calcDisplay.textContent = `${numStringInput1} ` + e.target.textContent +  ' '; //tidies up the display a tiny bit

    if (numStringInput1 !== "" && numStringInput2 !== "") {
        equalsButtonHandler();
    } 
}

function equalsButtonHandler() {
    if (numStringInput1 !== "" && numStringInput2 !== "") {
        solution = operate(operatorSign);
        calcDisplay.textContent = solution;
        operatorSign = "";
        numStringInput2 = "";
        numStringInput1 = solution;
    }
}

function numberButtonHandler(e) {
    if (calcDisplay.textContent == solution && operatorSign === "") {
        calcDisplay.textContent = "";
        numStringInput1 = "";
    }

    
    if (operatorSign === "") {
        numStringInput1 += e.target.textContent;
        calcDisplay.textContent += e.target.textContent;
    } 
    else if (operatorSign !== "") {
        numStringInput2 += e.target.textContent;
        calcDisplay.textContent += e.target.textContent;
    }
}

function decimalButtonHandler(e) {
    if (numStringInput1.includes(e.target.textContent) && operatorSign == "") {
        return;
    } else if (operatorSign == "") {
        numStringInput1 += e.target.textContent;
        calcDisplay.textContent += e.target.textContent;
    } else if (operatorSign !== "") {
        numStringInput2 += e.target.textContent;
        calcDisplay.textContent += e.target.textContent;
    }
}

function clearButtonHandler() {
    numStringInput1 = "";
    numStringInput2 = "";
    operatorSign = "";
    calcDisplay.textContent = "";
}

//button eventlisteners go here, once UI is established
const numberButtons = document.querySelectorAll(".numberButton");

numberButtons.forEach(button => {
    button.addEventListener('click', e => numberButtonHandler(e) );
});

const operationButtons = document.querySelectorAll(".operationButton");

operationButtons.forEach(button => {
    button.addEventListener('click', e => operationButtonHandler(e));
});

const decimalButton = document.querySelector("#decimal");

decimalButton.addEventListener('click', e => decimalButtonHandler(e));
const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener('click', equalsButtonHandler);

const clearButton = document.querySelector("#clear");

clearButton.addEventListener('click', clearButtonHandler);