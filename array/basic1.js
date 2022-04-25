// array/basic1.js

// reduce(); map() => 새로운배열, filter() => 새로운 배열
// reduce() => 결과값이 지정하는 값으로 string, number, 배열.

const numbers = [23, 4, 77, 51, 63];

let result = numbers.reduce(function (accu, e, ind, ary) {
    console.log(accu, e, ind, ary); // 0, 23, 0, 배열요소
    accu = accu + e; // 0 + 23 => 23, 27, 104
    return accu;
}, 0);

console.log(result);