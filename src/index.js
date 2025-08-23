'use strict';

function calcFactorial(n) {
    // if (n < 0) return null;
    if (n === 1 || n === 0) return 1;
    return n * calcFactorial(n - 1);
}

const targetNum = 5;

targetNum < 0 || !Number.isInteger(targetNum)
    ? console.log(`Factorial can't be calculated for ${targetNum}`)
    : console.log(`Factorial of ${targetNum} is ${calcFactorial(targetNum)}`);
