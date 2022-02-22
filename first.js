//in java
// public class test(){
//     public String name;
// }

//javascript에서의 변수는 type을 따지지 않아

var name  = "hong";
var age = 33;
//함수level의 scope를 갖고 있어..
//중복선언이 되어서, 변수가 오염됨. -> 처음에 선언된 것이 사라지는..

var name="gift";

console.log(name);

//var의 문제를 해결하고자,,, let과 const를 만들었어

let c="test";
// let c="test2";

const e=11; //초기값 무조건 선언해줘야하는 변수이다.
console.log(e);

