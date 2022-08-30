//variables/constants here please

//works in dev console
function add (num1, num2) {  //remember, despite their parameter names, these arguments will be strings!
    const addend1 = Number(num1);
    const addend2 = Number(num2);

    const solution = addend1 + addend2;

    return solution;
}

//also works in dev console
function subtract(num1, num2) {
    const minuend = Number(num1);
    const subtrahend = Number(num2);

    const solution = minuend - subtrahend;

    return solution;
}