//oef1
const daysOfWeek = ["Maandag","Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
for (const day of daysOfWeek) {
    console.log(day);
}

//oef2
let fruits = ['Apples', 'Pear', 'Orange'];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push('Banana');

// what's in fruits?
// alert(fruits.length); // ? 4


//oef3
const matrix = [
    ["1", "2"],
    ["3", "4"],
    ["5", "6"]
];

function getNumber() {
    console.log(matrix[2][1]);
}
getNumber();

//oef4
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number);
}
const greetings = "Hello";
for (const greeting of greetings) {
    console.log(greeting);
}
const colors = ['red', 'blue', 'green', 'yellow'];
colors.forEach(function(color, index) {
    console.log(color, index + 1);
});

//oef5
const woorden = [
    'mal',
    'snurkduif',
    'bromvlieg',
    'snottebel',
    'knotsgek',
    'pindakaas',
    'fluitketel',
    'smurfenmuts',
];
console.log(woorden.join("-"));

console.log(woorden.some(checkword));
function checkword(word) {
    return word[0] === "b";
}
woorden.unshift("Hello");
console.log(woorden);

woorden.every((word) => {
    return word[3];
})

woorden.sort();
console.log(woorden);

console.log(woorden[2]);

const words = woorden.filter((word) => word.length > 4);
console.log(words);

//oef6
const willekeurigeGetallen = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 100) + 1
);
console.log(willekeurigeGetallen);

const filteredNumbers = willekeurigeGetallen.filter((getal) => getal > 10);
console.log(filteredNumbers);

willekeurigeGetallen.pop();
console.log(willekeurigeGetallen);

willekeurigeGetallen.shift();
console.log(willekeurigeGetallen);

willekeurigeGetallen.push(5);
console.log(willekeurigeGetallen);

const filteredNumbersAlt = willekeurigeGetallen.filter((getal) => getal < 20);
console.log(filteredNumbersAlt);

console.log(willekeurigeGetallen.join(" "));

const totalNumbers = willekeurigeGetallen.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
})
console.log(totalNumbers);

const doubleNumbers = willekeurigeGetallen.map((value) => {
    return value * 2;
})
console.log(doubleNumbers);

const numberBiggerThanThirty = willekeurigeGetallen.some((getal) => getal > 30);
console.log(numberBiggerThanThirty);

//oef7

const willekeurigeNamenArray = [
    ['Alice', 'Bob', 'Charlie'],
    ['David', 'Eva', 'Frank'],
    ['Grace', 'Hank', 'Ivy'],
    ['Jack', 'Kelly', 'Liam']
];
console.log(willekeurigeNamenArray);

console.log(willekeurigeNamenArray.flat());

const deletedArray = willekeurigeNamenArray.map((nameList) => {
    nameList.shift();
    return nameList;
})
console.log(deletedArray);

const deletedLastArray = willekeurigeNamenArray.map((nameList) => {
    nameList.pop();
    return nameList;
})
console.log(deletedLastArray);

//oef8
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

function getResult(ar1, ar2) {
    const result = ar1.map((value, index) => {
        return value + ar2[index];
    });
    return result;
}
console.log(getResult(numbers1, numbers2));

//oef9
let woordenArray = ['appel', 'peer', 'kiwi', 'banaan'];
let langsteWoord = console.log(langsteWoord); 
// schrijf hier de logica om het langste woord te vinden 
// geeft 'banaan'

