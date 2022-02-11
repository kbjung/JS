// 제한이 없다. 초기 버전 JS 명령어
var a = 5;

// 값 업데이트 안됨
const b = 2;

// 값 업데이트 가능
let myName = 'kbj';

// 기본적으로 const, 가끔 let, var은 거의 사용안함

// 변수명에서 공백을 표현하는 방식
// JS에서 my name -> myName 식으로 표현한다. camelCase방식이라 부른다.
// Python에서는 my_name 으로 표현. snake_case 방식이라 부른다.


console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "jay";
console.log("your new hello is " + myName);