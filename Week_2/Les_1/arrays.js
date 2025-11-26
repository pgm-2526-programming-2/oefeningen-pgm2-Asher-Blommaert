const games = ["Super Mario Bros", "Zelda", "N+ Game", "Pokemon"];
const favoriteGames = [
    {
        name: "Super Mario Bros",
        releaseYear: 1980
    },
    {
        name: "Zelda",
        releaseYear: 1984
    }
];

const altGames = new Array();
Array.isArray(games);  //geeft true terug

const secondGame = games[1];
const altSecondGame = games.at(1);  //neemt ook 2de element alleen op andere schrijfwijze
const lastGame = games.at(-1);  //games[length - 1];    -2 is voorlaatste    -3 is eerste element

const values = ["Asher", 
function () {
    console.log("Hellow!");
}
];

const amountOfFavoriteGames = favoriteGames.length;

games.length = 3;  //toont maar 3 elementen
const topThree = games;

games.length = 4;
// console.log(games);




const stringArray = "[1, 2, 3, 4]";
const numbers = JSON.parse(stringArray);
console.log(typeof stringArray, typeof numbers);

// stringArray.push(5);  //Werkt niet omdat het een string is.
numbers.push(5);

const numbersString = JSON.stringify(numbers);
console.log(stringArray, numbers, numbersString);

const students = ["Nick", "Mert", "Yens"];
const people = ["Nick", "Mert", "Yens"];

console.log(students === people);  //returned false


//Mijn poging
// function areArraysEqual() {
//     const equalStudents = JSON.stringify(students);
//     const equalPeople = JSON.stringify(people);
    
//     if(equalStudents === equalPeople) {
//         console.log(equalStudents, equalPeople);
//     }
// }

// areArraysEqual();


//1ste optie

// function areArraysEqual(arrOne, arrTwo) {
//     const first = JSON.stringify(arrOne);
//     const second = JSON.stringify(arrTwo);

//     return first === second;
// }
// console.log(areArraysEqual(students, people));


//2de optie

function areArraysEqual(arrOne, arrTwo) {
    if(arrOne.length !== arrTwo.length) {
        return false;
    }


    return JSON.stringify(arrOne) === JSON.stringify(arrTwo);
}
console.log(areArraysEqual(students, people));

const matrix = [
    ["0", "0", "0", "0"],
    ["0", "X", "0", "0"],
    ["0", "0", "0", "0"],
    ["0", "0", "0", "0"]
];

matrix[1][1];   //ophalen van de X.

const colors = ["red", "green", "blue"];

colors.push("eind");
colors.pop(); //eind verwijderen
colors.unshift("Begin van array toevoegen");
colors.shift();  //begin verwijderen



console.log("Numbers:", numbers);
const doubleNumbers = numbers.map((value, index) => {
    return value * 2;
})
console.log("Double numbers:", doubleNumbers);


console.log("Double Numbers as String", doubleNumbers.join(", "));

const numbersWithoutEight = doubleNumbers.filter((value) => {
    return value !== 8;
})

console.log(numbersWithoutEight);

numbers.some((number) => {
    return number === 8;
})

numbers.some((number) => number === 8);

numbers.every((number) => {
    return number === 8;
})


//reduce --> minder maken
//van een array naar 1 getal gaan (meestal som/optellen)

const sales = [4, 10, 6];

const totalSales = sales.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
})
//loop 1 = 0 + 4 --> 4 
//loop 2 = 4 + 10 --> 14
//loop 3 = 14 + 6 --> 20

const products = [
    {name: "Shirt", price: 20},
    {name: "Shoes", price: 50},
    {name: "Hat", price: 15}
];

const totalPriceProducts = products.reduce((prevValue, currentValue) => {
    if(typeof prevValue === "object") {
        return prevValue.price + currentValue.price;
    }

    return prevValue + currentValue.price;
})
console.log(totalPriceProducts);