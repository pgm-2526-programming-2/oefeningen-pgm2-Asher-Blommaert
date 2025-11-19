function sum(a, b)  {  //declareren    parameters 
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function showCalculation(a = 0, b = 0, result = sum) {
    console.log(result(a, b));
}

showCalculation(1, 1, sum);
showCalculation(1, 1, multiply);
showCalculation(10, 2, division);


const name = "Asher";  //variabele
// const division = () => {};  //arrow function
// const multiplier = function() {}; 

function selectRandomStudent(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const age = 21;
const students = ["Yme", "Arne", "Mert"];

console.log(sum(age, 12));   //argumenten
console.log(20);

console.log(selectRandomStudent(students));

function showMessage(message) {
    console.log("Answer Checker Message");
}

function checkAnswer(answer, solution, callback) {
    if (answer === solution) {
        callback("X");
        return true;
    }

    callback("V");
    return false;
}

checkAnswer("Ja", "Ja", showMessage);

