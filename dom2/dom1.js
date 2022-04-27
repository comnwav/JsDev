let data = [{
        studNo: 101,
        studName: '조수연',
        engScore: 90,
        korScore: 80
    },
    {
        studNo: 102,
        studName: '최규완',
        engScore: 76,
        korScore: 87
    },
    {
        studNo: 103,
        studName: '권태현',
        engScore: 82,
        korScore: 73
    },
    {
        studNo: 104,
        studName: '김형민',
        engScore: 84,
        korScore: 76
    }
];

// 초기화
let list = document.getElementById('list');
data.forEach(elem => {
    list.appendChild(makeTr(elem));
});

// 입력버튼 이벤트
let sbmBtn = document.querySelector('input[type="submit"]');
sbmBtn.addEventListener('click', submitCallBack);

function submitCallBack() {

    let sno = document.getElementById('sno').value;
    let sname = document.getElementById('sname').value;
    let eng = document.getElementById('eng').value;
    let kor = document.getElementById('kor').value;

    if (!(sno && sname && eng && kor)) {
        alert('값을 빠짐없이 입력하세요>>');
        return;
    }

    let obj = [sno, sname, eng, kor];

    let tr = document.createElement('tr');
    tr.setAttribute('id', 'sno_' + sno);
    
    for (let val of obj) { // student['studNo']
        let td = document.createElement('td');
        td.innerHTML = val;
        tr.appendChild(td);
    }

};



// 변경버튼 이벤트
let chBtn2 = document.querySelector('input[type="button"]');
chBtn2.addEventListener('click', function (e) {
    let targetTr = document.querySelectorAll('#list>tr');

    let sno = document.getElementById('sno').value;
    let eng = document.getElementById('eng').value;
    let kor = document.getElementById('kor').value;

    targetTr.forEach(tr => {
        if (tr.children[0].innerHTML == sno) {
            tr.children[2].innerHTML == eng;
            tr.children[3].innerHTML == kor;
        
        }
    });
});


// let chBtn = document.querySelector('input[type="button"]');
// chBtn.addEventListener('click', chageCallBack);

// function chageCallBack() {
//     let sno = document.getElementById('sno').value;
//     let sname = document.getElementById('sname').value;
//     let eng = document.getElementById('eng').value;
//     let kor = document.getElementById('kor').value;

//     if (!(sno && sname && eng && kor)) {
//         alert('값을 빠짐없이 입력하세요>>');
//         return;
//     }

//     let searchTr = document.getElementById(`sno_${sno}`);
//     searchTr.children[1].innerHTML = sname;
//     searchTr.children[2].innerHTML = eng;
//     searchTr.children[3].innerHTML = kor;

//     if (!searchTr) {
//         alert('일치하는 학생번호가 없습니다>>');
//         return;
//     }
//     console.log(searchTr);
// }


// student 한건
function makeTr(student) {
    let tr = document.createElement('tr');
    tr.setAttribute('id', 'sno_' + student.studNo); // tr의 id는 unique 하다
    tr.addEventListener('click', function (e) {
        // e.stopPropagation();
        document.getElementById('sno').value = this.children[0].innerHTML;
        document.getElementById('sname').value = this.children[1].innerHTML;
        document.getElementById('eng').value = this.children[2].innerHTML;
        document.getElementById('kor').value = this.children[3].innerHTML;
    }, false); // true : 상위 -> 하위로 값을 찾아옴, false(default): 하위 -> 상위로 찾아옴

    for (let f in student) { // student['studNo']
        let td = document.createElement('td');
        td.innerHTML = student[f];
        tr.appendChild(td);
    }

    // 버튼 : 삭제.
    let btn = document.createElement('button');
    btn.innerHTML = '삭제';

    btn.addEventListener('click', function (e) {
        e.stopPropagation(); // 이벤트가 전파되는 것을 차단
        e.target.parentElement.parentElement.remove();
    }, false);

    let td = document.createElement('td');
    td.appendChild(btn);
    tr.appendChild(td);

    return tr;
};


