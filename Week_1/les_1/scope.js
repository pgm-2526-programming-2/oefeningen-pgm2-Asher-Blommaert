const message = "Hey daar!";

function sayHello() {
    const message = "Bye!"; //leeft alleen binnen de functie
    console.log(message);
}

sayHello();

console.log(message);