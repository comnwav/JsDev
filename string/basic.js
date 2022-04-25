// string/basic.js
// 문자열 vs 문자열 객체

let str1 = '문자열';
console.log(typeof str1);

let str2 = new String('문자열'); // 오브젝트
console.log(typeof str2);

console.log(str1 == str2); // 비교연산자 == 값을 비교
console.log(str1 === str2); // 비교연산자 === 값 & 타입 - 이것을 추천한돠

let result = str1.substring(0,2); // index:0 ~ index:2 잘라내기
console.log(result);
result = str2.substr(0,2); // index:0 크기 2 잘라내기
console.log(result);

const cal1 = '1 + 2 + 3'; // string
const cal2 = new String('1 + 2 * 3'); // object

// eval() : 문자열 => 수식변경
console.log(eval(cal1)); // 1 + 2 * 3 => 7
console.log(eval(cal2.valueOf())); // object => with valueOf - object 타입을 문자열로 반환

let trim = ' 문자열 공백 테스트 '

// trim() : 좌우의 여백을 잘라내기
trim = ' 문자열 공백 테스트 '.trim();
console.log(trim);

trim = ' 문자열 공백 테스트 '.trimStart().trimEnd(); // trimStart : 왼쪽 여백 제거, trimEnd 오른쪽 여백제거

// 문자열의 공백을 제거
trim = ' 문자열 공백 테스트 '.split(' '); // 매개값을 기준으로 문장을 잘라서 배열로 저장
trim = trim.filter(function(val) {
    return val;
}); // 배열의 각 요소의 true를 배열로 저장
console.log(trim);
console.log(trim.join(' ')); // array type 을 string type 으로 변환

result = ' 문자열 공백 테스트 '.split(' ').filter(val => val).join(',');
console.log(result);

// 자바스크립트 boolean 값 : null, '', 0, undefined = false;
if (!null) { // null => false
    console.log('flase값');
}

// slice, substring, substr(Deprecated);
result = '안녕하세요 반갑습니다.'.slice(0, 5); // 인덱스 기준 0~5 잘라내기, -면 오른쪽에서부터 
console.log(result); 
result = '안녕하세요 반갑습니다.'.substring(0, 6); // 
console.log(result);
result = '안녕하세요 반갑습니다.'.substr(2, 3); // 
console.log(result);

// toString() : 문자열로 변환
let num1 = 123;
console.log(typeof num1);
num1 = num1.toString();
console.log(typeof num1);

true.toString(); // 'true'

let obj = {
    key: 'Hong', value: 15
}
console.log(obj.toString()); // 오브젝트 타입은 문자열로 변환 안됨
console.log(obj.key.toString());
console.log(obj.value.toString());