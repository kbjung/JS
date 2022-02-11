// arguments
    // 함수에게 데이터를 전달하는 변수
function sayHello(nameOfPerson, age) {
    console.log("Hello! my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(a, b) {
    console.log(a + b);
}

plus(8, 60);

function divide(a, b) {
    console.log(a / b);
}
divide(98, 20);

const player = {
    name:"nico", 
    sayHello:function(otherPersonName) {
        console.log("Hello! " + otherPersonName + " nice to meet you!");
    },
};

console.log(player.name);
player.sayHello("lynn");