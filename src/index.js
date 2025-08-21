'use strict';

function factorial3(n) {
    if (n < 0) return 0;
    if (n <= 1) return 1;
    return n * factorial3(n - 1);
}

console.log(factorial3(5));
console.log(factorial3(4));
console.log(factorial3(3));
console.log(factorial3(-1));
console.log(factorial3(0));
console.log(factorial3(4));
