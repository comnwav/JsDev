// array/basic.js

// 배열선언 : [], new Array();
let arr = [1, 2];
let newAry = [3, 4, 5, 6];

// 추가: push:마지막 위치, unshift:첫번째위치
arr.push(3);
arr.unshift(0);

// 제거: pop() 뒤에서부터, shift() 앞에서부터;
arr.pop();
arr.shift();

// forEach
newAry.forEach(function (elem) {
    // arr.push(elem);
    arr.unshift(elem); // 6, 5, 4, 3, 1, 2
});

arr.pop(); // 6, 5, 4, 3, 1
arr.pop(); // 6, 5, 4, 3
arr.shift(); // 5, 4, 3

// splice (위치, 크기, 대체값) : 추가, 수정, 삭제
newAry.forEach(function (val) {
    arr.splice(1, 1, val); // 5, 6, 5, 4, 3, 4, 3
                           // 5, 6, 3
});

let names = [];
let anonym = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quibusdam odio omnis, asperiores inventore quod magni distinctio, enim ex expedita similique illo quos tempore facere qui quidem, consequuntur aperiam iusto?';

anonym.split(' ').forEach(function(val) {
    names.push(val);
}); 

console.log(names);
console.log(names.toString()); // toString : 문자열을 ','로 나눠서 보여준다

// forEach() : 반환 X
// map() : 각요소 => mapping 작업(다른 형태 반환)
// filter() : return 조건을 만족하는 값만 반환

let result = names.map(function (e) {
    return e.toUpperCase();
}); // 새로운 배열 

result = result.filter(e => {
    return e.length >= 10;
});

result = names
    .map(e => {
        let res = e.toUpperCase();
        return res;
    }) 
    .filter(e => e.length >= 10); // chain rules

console.log(result);