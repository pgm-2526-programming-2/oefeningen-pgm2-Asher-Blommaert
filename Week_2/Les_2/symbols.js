const student = Symbol("Yme");
const person = Symbol("Yme");

console.log(student, student.toString(), student.description, student === person);


//uppercase variabelen = waarden die nooit zullen veranderen & word gebruikt in heel het project!
const STATES = {
    LOADING: Symbol("Laden"),
    LOADED: Symbol("Laden")
}

console.log(STATES.LOADED === STATES.LOADING);