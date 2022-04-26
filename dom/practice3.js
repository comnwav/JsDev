// dom/practice3.js

let users = [{
    id: 101,
    name: "홍길동",
    age: 20
  },
  {
    id: 102,
    name: "김길동",
    age: 22
  },
  {
    id: 103,
    name: "박길동",
    age: 25
  }
]

document.addEventListener('DOMContentLoaded', callbackFunc);

function callbackFunc() {
  let showDiv = document.getElementById('show');
  let tableTag = document.createElement('table');
  tableTag.setAttribute('border', 1);
  showDiv.appendChild(tableTag);

  tableTag.appendChild(makeThead(users[0]));
  tableTag.appendChild(makeTbody(users));

  // 추가 버튼 이벤트
  let btn = document.querySelector('button');
  btn.addEventListener('click', () => {
    // userName, userAge
    let userName = document.getElementById('userName');
    let userAge = document.getElementById('userAge');

    let obj = {};
    obj.name = userName.value;
    obj.age = userAge.value;
    obj.id = 110;

    document.querySelector('table>tbody').append(makeTr(obj));

    userName.value = "";
    userAge.value = "";

  });
}

function makeThead(obj) {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  thead.appendChild(tr);

  for (let field in obj) {
    if (field == "id") {
      continue
    };
    let th = document.createElement('th');
    th.innerHTML = field;
    tr.appendChild(th);
  }

  let th = document.createElement('th');
  th.innerHTML = '기능';
  tr.appendChild(th);

  return thead;
}

function makeTbody(objAry) {
  let tbody = document.createElement('tbody');

  objAry.forEach((obj) => {
    let tr = makeTr(obj);
    tbody.appendChild(tr);
  });

  return tbody;
}

function makeTr(obj) {
  let tr = document.createElement('tr');

  // name, age 필드 => td생성

  for (field in obj) {
    if (field == "id") {
      tr.setAttribute(field, obj[field]);
    } else {
      let td = document.createElement('td');
      let text = document.createTextNode(obj[field] + `${field=='age'?'살':""}`);
      td.appendChild(text);
      tr.appendChild(td);
    }
  }
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.addEventListener('click', deleteCallback);
  let td = document.createElement('td');
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}

function deleteCallback(event) {
  event.target.parentElement.parentElement.remove(); // event.target => 이벤트 대상(버튼) 
  // this.parentElement.parentElement.remove(); // function() 일 경우 event.target
}