// string/basic3.js
// 'hello', "hello", `hello` => 모두 문자열 표현

let str1 = 'hello';
console.log(`${str1}`);

let str2 = `Welcome
to my home,
This is my house.
`;
console.log(str2);

str2 = 'Welcome\nto my home,\nThis is SPARTA.\n';
console.log(str2);

let age = 22;
console.log(`${age>=20?'성인':'청소년'}`);