const person1 = {
    fullName: 'Hong',
    age: 20,
    height: 175.3
}

const person2 = {
    fullName: 'Choi',
    age: 30,
    height: 178.2
}

const person3 = {
    fullName: 'Kweon',
    age: 28,
    height: 182.3
}

//
const persons = [person1, person2, person3];

let avgAge = 0;
let sum = 0;
for (let person of persons) {
    sum += person.age;
}
avgAge = sum / persons.length;
console.log(`평균나이는 ${avgAge} 입니다.`)

console.clear();
//
sum = 0;
let ageFnc = function sumAge(val, idx) {
    sum += val.age;
}

let heightFnc = function sumHeight(val, idx) {
    sum += val.height;
}

sum = 0;
persons.forEach(heightFnc);
avg = sum / persons.length;
// console.log(`평균나이는 ${avg}살 입니다.`)
console.log(`평균키는 ${avg}cm 입니다.`)

//
console.clear();

let tag = "";

let allPerson = function (val, idx) {
    if (idx == 0) {
        tag += '<ul>';
    }
    tag += `<li>${val.fullName}, ${val.age}살, ${val.height}cm</li>`;
    if (idx == persons.length - 1) {
        tag += '</ul>'
    }
}

let over170 = function (val, idx) {
    if (idx == 0) {
        tag += `<ul>`;
    }
    if(val.height >= 170) {
        tag += `<li>${val.fullName}, ${val.age}살, ${val.height}cm</li>`;
    }
    if (idx == persons.length - 1) {
        tag += `</ul>`;
    }
}

// 이름, 나이, 키
persons.forEach(over170);

console.log(tag);
document.write(tag);
