//variables/constants here please
let numStringInput1 = "0";
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