// string/practice.js

let str1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto quibusdam magni minima rem nemo harum nam, mollitia enim rerum non error recusandae soluta aut? Saepe id ex error accusamus?';

// 단어의 길이가 10개 이상인 값을 골라내서 console 에 출력

str1 = str1.split(' ');
result = str1.filter(function (val) {
    return val;
});

function getString(val) {
    for (let n of val) {
        if (n.length >= 10) {
            console.log(n);
        }
    }

}

getString(result);