const firstName = "Jan";  //primitief
const age= 20;  //primitief
const isStudent = true;  //primitief
const hobbies = ["Gaming", "Soccer"];  //samengesteld of reference type
const address = {
    street: "New York Straat",
    number: 4
} //samengesteld of reference type

const interests = hobbies;
let nickname = firstName;

nickname = "Gamerboy";    //Vervangt enkel de waarde van nickname
interests.push("Kitesurfen");  //vervangt bij beide de waarde van interests als bij hobbies

console.log(interests);



let total = 0;


function addFiveToNumber(a = 0) {
    total = a + 5;
    console.log(a + 5);
}

addFiveToNumber(2);
console.log("Totaal:" , total);



function doubleNumber(num) {
    num = num * 2;
    console.log("Binnen functie:", num);
}

function doubleNumberWithReference(obj) {
    obj.number = obj.number * 2;
    console.log("Binnen ref-functie:", obj.number);
}

let originalNumber = 5;
let originalNumberAsReferenceType = {
    number: 5
}


doubleNumber(originalNumber);
doubleNumberWithReference(originalNumberAsReferenceType);
console.log("Original number uit functie:", originalNumber);
console.log("Original number uit ref-functie:", originalNumberAsReferenceType.number);