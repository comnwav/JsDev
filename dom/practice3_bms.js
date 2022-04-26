document.addEventListener('DOMContentLoaded', makeTable);

function makeTable() {

    let table, thead;

    table = document.createElement(`table`);
    table.setAttribute(`border`, `1`);

    thead = makeHead();
    table.appendChild(thead);
    
    table.appendChild(maketbody());
  
    let divShow = document.getElementById(`show`);
    divShow.appendChild(table);

}

function makeHead() {

    let thead, tr, th, text;

    thead = document.createElement(`thead`);

    tr = document.createElement(`tr`);

    th = document.createElement(`th`);
    text = document.createTextNode(`이름`);
    th.appendChild(text);
    tr.appendChild(th);

    th = document.createElement(`th`);
    text = document.createTextNode(`나이`);
    th.appendChild(text);
    tr.appendChild(th);

    thead.appendChild(tr);

    return thead;

}

// function makeBody(ary) {

//     let tbody, tr, td, text;

//     tbody = document.createElement(`tbody`);

//     ary.forEach(e => {

//         tr = document.createElement(`tr`);

//         tr.setAttribute(`id`, `${e[`id`]}`);

//         td = document.createElement(`td`);
//         text = document.createTextNode(`${e[`name`]}`);
//         td.appendChild(text);
//         tr.appendChild(td);

//         td = document.createElement(`td`);
//         text = document.createTextNode(`${e[`age`]}`);
//         td.appendChild(text);
//         tr.appendChild(td);
//         tbody.appendChild(tr);

//     });

//     return tbody;

// }

function maketbody() {

    tbody = document.createElement(`tbody`);
    inputData();

    return tbody;

}

function makeTr(e) {

    let tr, td, text;

    tr = document.createElement(`tr`);

    td = document.createElement(`td`);
    text = document.createTextNode(`${e[`name`]}`);
    td.appendChild(text);
    tr.appendChild(td);

    td = document.createElement(`td`);
    text = document.createTextNode(`${e[`age`]}`);
    td.appendChild(text);
    tr.appendChild(td);

    return tr;

}

function inputData() {

    let btn = document.querySelector('button');
    btn.addEventListener('click', function () {
        // 입력값1, 입력값2
        let name = document.getElementById('userName').value;
        let age = document.getElementById('userAge').value;
        let obj = {};

        if (!name) {
            alert('거 이름이 뭐요?');
            return;
        }

        obj.name = name;
        obj.age = age;

        document.querySelector(`table>tbody`).appendChild(makeTr(obj));

    });



}