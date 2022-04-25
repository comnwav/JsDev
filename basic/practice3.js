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

const persons = [person1, person2, person3]

const newPersons = persons.map(function (val, idx) {
    let newObj = {}; // 오브젝트 타입을 선언
    newObj.index = idx + 1; // 오브젝트의 속성(필드)를 추가
    newObj.Name = val.fullName; 
    newObj.age = val.age;
    newObj.height = val.height;

    return newObj;
});

console.log(newPersons);

function tableList(personAry) {
    document.write(`<table border="1">`);
    document.write(`<tr>`);
    for (let field in personAry[0]) {
        document.write(`<td>${field}</td>`)
    }

    for (let person of personAry) {
        document.write(`<tr>`);
        for(let field in person) {
            document.write(`<td>${person[field]}</td>`);
        }
        document.write(`<tr>`);
    }
    document.write(`</table>`)
}

// 함수실행
tableList(newPersons);

