const age = 80;

function calculatorAgeOfKr(age) {
    return age + 2;
};

const krAge = calculatorAgeOfKr(age);
console.log(krAge);

const calculator = {
    plus:function(a, b) {
        return a + b;
    },
    minus:function(a, b) {
        return a - b;
    },
    times:function(a, b) {
        return a * b;
    },
    divide:function(a, b) {
        return a / b;
    },
    power:function(a, b) {
        return a ** b;
    },
}

const plusResult = calculator.plus(3, 5);
const minusResult = calculator.minus(plusResult, 6);
const timesResult = calculator.times(minusResult, 5);
const divideResult = calculator.divide(timesResult, 2);
const powerResult = calculator.power(divideResult, 3);
console.log(powerResult);
