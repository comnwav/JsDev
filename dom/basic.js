// dom/basic.js

// DOM : 생성, 속성, 삭제, 부모 - 자식 관계
// addEventListener('이벤트이름', '실핼항 이벤트 핸들러')
// 이벤트이름에 해당하는 이벤트를 모두 읽은 후 이벤트 핸들러를 실행한다.

console.log('1');
document.addEventListener('DOMContentLoaded', function() { // document : <body> 영역
    console.log('2');
    let h3Tag = document.getElementsByTagName('h3'); // HTMLCollection(여러개) 타입으로 리턴하겠소
    console.log(h3Tag);
    h3Tag[1].innerHTML = 'contents changed';

    let first = document.getElementById('first'); // id 값에 해당하는 요소 하나를 가져온다
    console.log(first);
    first.innerHTML = 'Git Changed';

    let second = document.getElementsByClassName('first');
    second[0].innerHTML = '사과';

    // CSS의 선택자를 통해 읽어오기 h3 > div
    let list = document.querySelector('ul>li'); // 한건만 리턴
    console.log('list');

    let list2 = document.querySelectorAll('ul>li'); // 전부 리턴
    console.log(list2);
    list2[1].style.backgroundColor = 'yellow';

    // DOM 생성
    let newList = document.createElement('li'); // <li>Mango</li> 생성
    newList.innerHTML = 'Mango';
    console.log(newList);
    
    console.log('3');
    
    // ul 하위요소 <li>Mango</li>
    let ulTag = document.querySelector('ul');
    ulTag.appendChild(newList);
    
});