// page.js
console.log(member1);

let field = 'fullName';
console.log(member1.fullName);
console.log(member2['fullName']);
console.log(member3[field]); // 이걸 기억해주소

// 배열요소를 반복적으로 for..of
for (let member of members) {
    console.log(`이름은 ${member['fullName']}이고 나이는 ${member['age']} 점수는 ${member['score']}`);
}

// 오브젝트의 속성(필드)을 반복적으로 for..in
for (let field in member1) {
    console.log(`${field} => ${member1[field]}`);
}

// 각 배열요소의 각 필드를 출력.
for (let member of members) {
    for (let field in member) {
        console.log(`${field} => ${member[field]}`);
    }
    console.log(`---------------------------------`);
}

document.write('<table border=1px>');
let fields = ['fullName', 'age', 'score'];

document.write(`<tr>`)
for (i = 0; i < 3; i++) {
    document.write(`<td>${fields[i]}</td>`);
}
document.write(`</tr>`)

for (let n of members) {
    document.write(`<tr>`)
    for (let i of fields) {
        document.write(`<td>${n[i]}</td>`);
    }
    document.write(`</tr>`)
}
