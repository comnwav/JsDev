// object/practice.js

// json 파일은 왜 쓰는가 client to server, server to client or client to client가
// 정보를 주고 받을때 text 가 가장 편하다 하지만 텍스트가 구분되어있지 않으면
// 서로 구분하기 힘들돠 그래서 처음에는 태그로 받아왔는데 거지같아서 json이 나왔음 이거 짱짱맨
const jsonObj =
    `[{"id":1,"first_name":"Gerhardt","last_name":"Byrom","email":"gbyrom0@acquirethisname.com","gender":"Male","ip_address":"194.34.232.106"},
{"id":2,"first_name":"Bibbie","last_name":"Prichard","email":"bprichard1@edublogs.org","gender":"Female","ip_address":"25.5.79.1"},
{"id":3,"first_name":"Andree","last_name":"Doog","email":"adoog2@delicious.com","gender":"Female","ip_address":"154.178.89.175"},
{"id":4,"first_name":"Paulie","last_name":"Bianco","email":"pbianco3@baidu.com","gender":"Male","ip_address":"163.201.110.255"},
{"id":5,"first_name":"Shanda","last_name":"Tuffell","email":"stuffell4@livejournal.com","gender":"Female","ip_address":"139.181.113.132"},
{"id":6,"first_name":"Olag","last_name":"Perel","email":"operel5@jimdo.com","gender":"Genderqueer","ip_address":"180.170.185.223"},
{"id":7,"first_name":"Gare","last_name":"Manuello","email":"gmanuello6@pbs.org","gender":"Male","ip_address":"5.124.15.2"},
{"id":8,"first_name":"Kally","last_name":"Conquer","email":"kconquer7@hatena.ne.jp","gender":"Female","ip_address":"196.11.206.197"},
{"id":9,"first_name":"Eb","last_name":"Iggo","email":"eiggo8@omniture.com","gender":"Male","ip_address":"225.27.114.84"},
{"id":10,"first_name":"Marius","last_name":"Lievesley","email":"mlievesley9@cloudflare.com","gender":"Male","ip_address":"113.123.74.48"},
{"id":11,"first_name":"Darnall","last_name":"Crickmoor","email":"dcrickmoora@weibo.com","gender":"Male","ip_address":"71.28.59.244"},
{"id":12,"first_name":"Etta","last_name":"Swindall","email":"eswindallb@example.com","gender":"Female","ip_address":"242.174.105.26"},
{"id":13,"first_name":"Antoinette","last_name":"Olivie","email":"aoliviec@i2i.jp","gender":"Bigender","ip_address":"126.251.67.155"},
{"id":14,"first_name":"Montgomery","last_name":"Mewha","email":"mmewhad@globo.com","gender":"Male","ip_address":"141.114.134.17"},
{"id":15,"first_name":"Ema","last_name":"Wharlton","email":"ewharltone@instagram.com","gender":"Female","ip_address":"22.128.189.185"}]`;

// json 문자열 > javascript 오브젝트 변경 with JSON.parse() 메소드
const objAry = JSON.parse(jsonObj);
console.log(objAry); // id:? first_name:?, last_name:?

let fields = ['id', 'first_name', 'last_name', 'email']

function showTable(ary) {
    let tableTag = "";

    // <table> 테이블선언 <thead> 레이블영역 선언 <th> 레이블 영역 필드 
    // <tbody> 테이블 필드 영역 <tr> 행선언 <td> 필드데이터
    tableTag += `<table border="1">`;
    tableTag += createHead();
    tableTag += createBody(ary);
    tableTag += `</table>`;
    document.write(tableTag);
}

function createHead() {
    let headTag = "";
    headTag = `<thead><tr>`;
    fields.forEach(function (val) {
        headTag += `<th>${val}</th>`;
    });
    headTag += `</tr></thead>`;
    return headTag;
}

function createBody(ary) {
    let bodyTag = "";
    bodyTag += `<tbody>`;
    ary.forEach(function (val, idx) {
        bodyTag += `<tr style="background-color:${idx%2==0?'yellow':'teal'};">`;
        fields.forEach(function (field) {
            bodyTag += `<td>${val[field]}</td>`
        });
        bodyTag += `</tr>`;
    });
    bodyTag += `</tbody>`
    return bodyTag;
}

showTable(objAry);