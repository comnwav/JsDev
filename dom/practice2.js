// DOM의 구조와 노드, 태그의 이해
document.addEventListener('DOMContentLoaded', function () {
    
    let divTag = document.createElement(`div`);
    
    let spanName = document.createElement(`span`);
    // name.innerHTML = `홍길동`;
    let name = document.createTextNode(`홍길동`); 
    // TextNode는 조금 더 디테일한 컨트롤을 위한 추가 하위구조이다.
    // innerHTML로도 할 수 있지만 하위요소에 대한 세부적인 컨트롤이 불가능하다
    spanName.appendChild(name);
    
    let spanAge = document.createElement(`span`);
    // age.innerHTML = `20살`;
    let age = document.createTextNode(`20살`);
    spanAge.appendChild(age);
    
    let hypen = document.createTextNode(` - `);
    
    divTag.appendChild(spanName);
    divTag.appendChild(hypen);
    divTag.appendChild(spanAge);

    let divShow = document.getElementById(`show`);
    divShow.appendChild(divTag);
});

// id attribute 속성 추가
document.addEventListener('DOMContentLoaded', function () {
    
    let divTag = document.createElement(`div`);
    
    let spanName = document.createElement(`span`);
    spanName.setAttribute(`id`, `name`); // attribute node 추가

    let name = document.createTextNode(`홍길동`); 
    spanName.appendChild(name);
    
    let spanAge = document.createElement(`span`);
    spanAge.setAttribute(`class`, `age`); // attribute node 추가

    let age = document.createTextNode(`20살`);
    spanAge.appendChild(age);
    
    let hypen = document.createTextNode(` - `);
    
    divTag.appendChild(spanName);
    divTag.appendChild(hypen);
    divTag.appendChild(spanAge);

    let divShow = document.getElementById(`show`);
    divShow.appendChild(divTag);
});

document.addEventListener('DOMContentLoaded', function () {
    
    let tableTag = document.createElement(`table`);
    tableTag.setAttribute(`border`, `1`)
    
    let theadTag = document.createElement(`thead`);

    let trTag = document.createElement(`tr`);

    let th1Tag = document.createElement(`th`);
    th1Tag.innerHTML = `이름`;

    let th2Tag = document.createElement(`th`);
    th2Tag.innerHTML = `나이`;

    let tbodyTag = document.createElement(`tbody`);

    let tr1BodyTag = document.createElement(`tr`);
    tr1BodyTag.setAttribute(`id`, `101`);

    let tr2BodyTag = document.createElement(`tr`);
    tr2BodyTag.setAttribute(`id`, `102`);

    let name1 = document.createElement(`td`);
    name1.innerHTML = `홍길동`;

    let name2 = document.createElement(`td`);
    name2.innerHTML = `김길동`;

    let age1 = document.createElement(`td`);
    age1.innerHTML = `20살`;

    let age2 = document.createElement(`td`);
    age2.innerHTML = `22살`;

    tableTag.appendChild(theadTag);
    theadTag.appendChild(trTag);
    trTag.appendChild(th1Tag);
    trTag.appendChild(th2Tag);
    tableTag.appendChild(tbodyTag);
    tbodyTag.appendChild(tr1BodyTag);
    tr1BodyTag.appendChild(name1);
    tr1BodyTag.appendChild(age1);
    tbodyTag.appendChild(tr2BodyTag);
    tr2BodyTag.appendChild(name2);
    tr2BodyTag.appendChild(age2);

    let divShow = document.getElementById(`show`);
    divShow.appendChild(tableTag);
});