//variables/constants here please

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

function multiply(num1, num2) {
    const multiplicand = Number(num1);
    const multiplier = Number(num2);

    const product = multiplicand * multiplier;

    return product;
}

function divide (num1, num2) {
    const dividend = Number(num1);
    const divisor = Number(num2);

    const quotient = dividend / divisor;

    return quotient;
}