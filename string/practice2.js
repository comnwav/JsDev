// string/practice2.js

let sso = ['970101-1234567', '970101-2234567', '9701013234567', '970101/4234567'];

function checkGender(ssn) {
   let rs = ssn.replace(/\D/g,'');
   if (rs.charAt(6) == 1 || rs.charAt(6) == 3) {
       return '남자';
   } else {
       return '여자';
   }
}

function checkGenAry (val) {
    val.forEach(function (elem) {
        console.log(elem + ' - ' + checkGender(elem));
    });
}

function checkGenAry2 (val) {
    val.forEach(e => {
        console.log(e + ' - ' + checkGender(e));
    });
}

let result = checkGender('970101-1234567');
console.log(result);

result = checkGenAry(sso);
result = checkGenAry2(sso);