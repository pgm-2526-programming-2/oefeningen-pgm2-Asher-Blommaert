//oef1
function greetings() {
    return "Hallo daar!";
}

//oef2
function greetings(a) {
    return "Hallo " + a + "!";
}

console.log(greetings("Anna"));

//oef3
function greetings(a = "daar") {
    return "Hallo " + a + "!";
}

console.log(greetings());

//oef4
function controlAge(age) {
    if(age >= 18) {
        console.log("Volwassen");
    } else {
        console.log("Nog niet volwassen");
    }
}

controlAge(16);
controlAge(21);

//oef5
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    
    // return confirm("Did parents allow you?");
}

console.log(checkAge(16));

//oef6
function mainLogic() {
    
}

mainLogic(myCallback);