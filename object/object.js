// object.js

let member1 = {
    fullName: 'Hong',
    age: 20,
    score: 80
};

let member2 = {
    fullName: 'Hwang',
    age: 22,
    score: 88
};

let member3 = {
    fullName: 'Park',
    age: 25,
    score: 92
};

console.log(member1.fullName);
console.log(member2.age + member2.age);

// 홍의 나이는 20이고 점수는 80입니다.
const members = [member1, member2, member3];
// var wr;
document.write('<ul>');
for (let n of members) {
    // wr = '<li>'+ n.fullName + '의 나이는' + n.age + '이고 점수는' + n.score + '점 입니다.</li>';
    // document.write(wr);
    document.write(`<li>${n.fullName}의 나이는 ${n.age}이고 점수는 ${n.score} 입니다.`)
}
document.write('</ul>'); 

let welcome = 
`안녕하세요. 
반갑습니다.`;
console.log(welcome);

// {key: value}, {key: value}