// array/basic1.js

// reduce(); map() => 새로운배열, filter() => 새로운 배열
// reduce() => 결과값이 지정하는 값으로 string, number, 배열.

const numbers = [23, 4, 77, 51, 63];

// 배열요소의 누적합
let result = numbers.reduce(function (accu, e, ind, ary) {
    console.log(accu, e, ind, ary); // 0, 23, 0, 배열요소
    accu = accu + e; // 0 + 23 => 23, 27, 104
    return accu;
}, 0);

// 배열요소의 * 2 => 새로운 배열
result = numbers.reduce(function (accu, e) {
    return accu.push(e * 2);
}, []);

// filter : 50보다 큰 숫자를 가지는 새로운 배열
result = numbers.reduce(function (acuu, e) {
// result = numbers.reduceRight(function (acuu, e) { // reduceRight 는 오른쪽 부터 조짐
    if(e >= 50) {
        accu.push(e);
    };
    return accu; // 반환되는 값은 다음 순번의 초기값으로 사용됨
}, []);
console.log(result);