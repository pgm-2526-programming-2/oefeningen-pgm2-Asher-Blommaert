//Operators
// < > === !=== etc

//spread en rest operator
//... (Drie puntjes)

const numbers = [1, 2, 3];
console.log(numbers, ...numbers);

//reden om te spreaden?
// 1. Kopie maken van een referentie datatype
const students = ["Mert", "Yens"];
students.push("Farah");
const friends = students;

// const people = [students];  //[["Mert", "Yens", "Farah"]]
const people = [...students];   //nieuwe array! Reference kapot!
students.push("Milana");
//students = ["Mert", "Yens", "Farah", "Milana"]
//friends = ["Mert", "Yens", "Farah", "Milana"]
//people = ["Mert", "Yens", "Farah"]

//2. Om arrays samen te voegen
const drinks = ["Pintje", "Gin", "Mocktail"];
const snacks = ["Frikandel", "Chipjes"];

const menu = [...drinks, "Cola", ...snacks];

//dit werkt ook met objecten
const car = {
    brand: "Citroen",
    model: "C8",
    year: 2011
}

const upgrade = {
    spoiler: true,
    extra: ["GPS", "Custom Uitlaat"]
}

//car.upgrade = upgrade;

const upgradedCar = {
    ...car,
    ...upgrade
}

//3. Wanneer een method geen arrays aanvaardt
Math.max(3, 5, 7, 1, 2);  //returned het grootste getal
Math.max(...numbers);

//Object keys advanced syntax
const a  = "Hello";

const obj = {
    a    //wanneer een key naam gelijk is aan een variabele naam
}

