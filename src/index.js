'use strict';

function calcFactorial(n) {
    if (n <= 1) return 1;
    return n * calcFactorial(n - 1);
}

const targetNum = 10;

targetNum < 0 || !Number.isInteger(targetNum)
    ? console.log(`Factorial is not defined for ${targetNum}`)
    : console.log(`Factorial of ${targetNum} is ${calcFactorial(targetNum)}`);
