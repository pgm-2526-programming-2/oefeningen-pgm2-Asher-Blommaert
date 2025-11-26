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
function mainLogic(myCallback) {
    myCallback()
}

function myCallback() {
    console.log("Dit is de callback-functie")
}

mainLogic(myCallback);

//oef7
// let myNumber = 20;
// function increaseByTen(a) {
//     return a + 10;
// }

// console.log(increaseByTen(myNumber));

let myNumber = {
    num: 20,
};
increaseByTen(myNumber);
console.log("Number:", myNumber);
function increaseByTen(obj) {
    obj.num += 10;
}

//oef8
const global = 200;

function newGlobal() {
    const global = 100;
    console.log(global)
}

console.log(global);
newGlobal();

//oef9
const todoList = [
    {
        task: "Complete Project",
        subtasks: [
        {
            task: "Write Code",
            subtasks: [
                { task: "Implement Feature A" },
                { task: "Test Feature A" },
                { task: "Refactor Code" },
            ],
        },
        {
            task: "Document Project",
            subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
        },
        ],
    },
    {
        task: "Prepare Presentation",
        subtasks: [{ task: "Create Slides" }, { task: "Practice Delivery" }],
    },
];

function showToDoList(list) {
    for(const item of list) {
        console.log(`Task: ${item.task}`)
    }
}

showToDoList(todoList);

//oef10
function checkAge(age) {
    // if (age > 18) {
    //     return true;
    // } else {
    //     return confirm("Did parents allow you?");
    // }
    return age >= 18 ? true : "Did your parents allow you?"
}

console.log(checkAge(19))