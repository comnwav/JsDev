// document.
document.addEventListener('DOMContentLoaded', function () {
    
    let ul = document.createElement('ul');
    
    let li = document.createElement('li');
    li.innerHTML = '아이스 아메리카노';
    ul.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = '카페라떼';
    ul.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = '레몬에이드';
    ul.appendChild(li);
    
    document.getElementById('show').appendChild(ul);
});

//
let menus = [`Long Black`, `Cafe Latte`, `Lemonade`, `Flat White`];

// for
document.addEventListener('DOMContentLoaded', function () {
    let ulTag = document.createElement('ul');
    for (let i = 0; i < menus.length; i++) {
        let liTag = document.createElement('li');
        liTag.innerHTML = menus[i];
        ulTag.appendChild(liTag);
    }
    let divShow = document.getElementById(`show`);
    divShow.appendChild(ulTag);
});

// forEach
document.addEventListener('DOMContentLoaded', function () {
    let ulTag = document.createElement('ul');
    let result = menus.forEach(e => {
        let liTag = document.createElement(`li`);
        liTag.innerHTML = e;
        ulTag.appendChild(liTag);        
    })
    let divShow = document.getElementById(`show`);
    divShow.appendChild(ulTag);
});

// reduce
document.addEventListener('DOMContentLoaded', function () {
    let rsTag = document.createElement('ul'); 
    rsTag = menus.reduce(function (pre, curr, ind) {
        
        liTag = document.createElement(`li`);
        liTag.innerHTML = curr;

    return rsTag;
}, "<ul>");
});


