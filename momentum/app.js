const toBuy = ['tomato', 'apple', 'potato'];

console.log(toBuy);
toBuy[2] = 'milk';
console.log(toBuy);
toBuy.push('pork');
console.log(toBuy);

const player ={
    name:"nico",
    age:10,
};
console.log(player, console);
player.weight = 'increase';
console.log(player);

function plus(a, b) {
    console.log(a + b);
};

plus(1,2);
plus(2,3);

const calcurator = {
    add: function(a, b){ 
        console.log(a + b);
    },
    min: function(a, b){
        console.log(a - b);
    },
    power: function(a, b){
        console.log(a ** b);
    },
}
calcurator.add(2,3);
calcurator.min(2,3);
calcurator.power(2,3);
