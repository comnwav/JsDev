// practice.js
const numbers = [23, 45, 32, 55, 34, 72];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0)
        sum += numbers[i];
}
console.log('합: ' + sum);

sum = 0;
for (let number of numbers) {
    if (number % 2 == 0) {
        sum += number;
    }
}
console.log('합: ' + sum);

sum = 0;
number.forEach(function (prm, idx) {
    console.log(prm, idx);
    if(prm % 2 == 0) {
        sum += prm;
    }
});
console.log('합: ' + sum);

sum = 0;
number.forEach((prm) => {
    if(prm % 2 == 0) {
        sum += prm;
    }
});
console.log('합: ' + sum);

// 표현식으로..
let evenSum = (prm, idx) => {
    console.log(prm, idx);
    if (prm % 2 == 0) {
        sum += param;
    }
};

let oddSum = (prm, idx) => {
    console.log(prm, idx);
    if (prm % 2 == 1) {
        sum += param;
    }
};

sum = 0;
numbers.forEach(evenSum);
console.log('합: ' + sum);