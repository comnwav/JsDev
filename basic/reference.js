// reference.js

const names = ['조수연','황진주','권가희','이유빈'];

for(let i=0; i<names.length; i++) {
    console.log((i+1) + '번째 이름:' + names[i]);
}

// enhanced for. for(String name : names) {}
for(let n of names) {
    console.log(n);
}

const numbers = [23, 44, 38, 12, 56];

for (let num of numbers) {
    if (num > 40) {
        console.log(num);
    }
}

const inputs = [];
for(let i=0; i<numbers.length; i++) {
    var inputVal = prompt('값을입력하시게'); // 숫자를 넣더라도 문자로 출력된다.
    console.log(typeof inputVal, inputVal);
    inputs[i] = parseInt(inputVal);
}

// 합계를 구하는, 평균:
var sum = 0;
function sumAry() {
    for(let n of inputs) {
        sum = sum + n;
    }
}
var avg;
function avgAry() {
    avg = sum / numbers.length;
}

sumAry();
avgAry();

console.log(`합계:${sum} / 평균:${avg}`);