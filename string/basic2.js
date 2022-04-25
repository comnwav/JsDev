// string/basic2.js

// indexOf(), lastIndexOf() : 찾을 문자열의 위치인덱스 반환.
let result = '안녕하세요 홍길동입니다'.indexOf('홍길동');
result = '안녕하세요 홍길동입니다'.lastIndexOf('홍길동'); // '동'위치를 앞에서부터 찾음
result = '안녕하세요 홍길동입니다, 서울의 홍길동, 대구의 홍길동입니다.'.indexOf('홍길동', 15);

let str1 = '안녕하세요 홍길동입니다, 서울의 홍길동, 부산의 정상수, 대구의 홍길동입니다.';
let position = str1.indexOf('부산'); // '부산'의 위치인덱스
result = str1.indexOf('정상수', position);
console.log(result);

// charAt(인덱스) : 인덱스를 넣으면 해당 위치의 문자를 반환
let str2 = str1.charAt(result);
console.log(str2);

// toLowerCase(), toUpperCase() : 문자변경
let str3 = 'Lorem ipsum dolor sit amet consectetur DOLOR';
let str4 = 'Lorem ipsum sit amet consectetur DOLOR';
console.log(str3.toUpperCase());
console.log(str3.toUpperCase().toLowerCase());

// includes('찾을 문자열') : true / false
result = str3.includes('dolor');
console.log(result);


// search('찾을 문자열') 추가기능 : search(정규표현식); 찾을 문자열의 인덱스 반환
// 정규표현식 오브젝트 - (new RegExp()), 배열[](new Array(1,2))

result = str3.toLowerCase().search('dolor');
console.log(result);
result = str3.toUpperCase().search('DOLOR');
console.log(result);

result = str4.search(/dolor/g);  // g => 전부 찾아오낟
console.log(result);
result = str4.search(/dolor/ig); // i => 대소문자 관계없다는 옵션
console.log(result);

// match('찾을 문자열') : 문자열 or  null 반환.
let str5 = 'bad MORNING, GOOD AFTERNOON, good evening, and good night';
result = str5.match('good');
console.log(result);
result = str5.match(/good/);
console.log(result);
result = str5.match(/good/g); // g옵션은 전부 찾아온돠
console.log(result);
result = str5.match(/good\s\w/gi); // s:공백, w:문자하나, +:단어하나
console.log(result);
result = str5.match(/good\s\w+/gi); // +:단어하나
console.log(result);

// replace('찾을 문자열', '바꿀 문자열');
result = str5.replace('good', 'better');
console.log(result);
result = str5.replace(/good/g, 'better');
console.log(result);
result = str5.replace(/good/ig, 'better');
console.log(result);
result = str5.replace(/\s/ig, '-');
console.log(result);
result = str5.replace(/\W/ig, '-'); // W:문자 이외, w:문자 하나
console.log(result);

let str6 = 'morning1 morning2 morning123';
result = str6.replace(/\d/g, ''); // d:숫자
console.log(result);
result = str6.replace(/\D/g, ''); // D:숫자 이외
console.log(result);

let sso = ['970101-1234567', '970101 1234567', '970101/1234567'];
result = sso.forEach(num => console.log(num.replace(/\D/g,'')));

// 문자열 합치기 : +, concat()
console.log('hello' + ' world');
console.log('hello'.concat(' world'));